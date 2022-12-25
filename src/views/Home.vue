<style scoped>
   .home-wrapper {
      @apply mt-16 px-5 md:px-8 py-2 lg:mt-20 lg:w-8/12 lg:mx-auto;
   }
   
   .home-wrapper p {
      @apply text-xs;
   }
   
   .home-wrapper strong {
      @apply text-sm;
   }
</style>

<template>
   <section>
   	<Loader :load="isLoader" />
      <div class="home-wrapper">
         <!-- Welcome -->
         <SectionCard borderColor="border-blue-500">
            <template v-slot:card-content>
               <strong>Selamat Datang</strong>
               <p>{{ EventTitle.eventTitle }}</p>
            </template>
         </SectionCard>
         <!-- End of Wellcome --> 
         
         <!-- Main Feature -->
         <SectionCard borderColor="border-green-500">
            <template v-slot:card-content>
               <!-- Participant Count -->
               <div class="mb-6">
                  <span>
                     <strong>
                        {{ count }}
                        <i class="text-xs text-gray-700 fas fa-user-friends"></i>
                     </strong> 
                  </span>
                  <p>Pemilih sudah menentukan pilihannya</p>
               </div>
               
               <!-- Countdown -->
               <div class="mb-6">
                  <!-- State event sudah dimulai -->
                  <strong v-if="isEventStart && !isEventFinish">Akan berakhir dalam</strong>
                  <!-- State event belum mulai -->
                  <strong v-if="!isEventStart && !isEventFinish">Akan dimulai pada</strong>
                  <!-- State event telah berakhir -->
                  <strong v-if="isEventFinish">Event telah berakhir</strong>
                  <!-- Countdown Element -->
                  <p v-if="!isEventFinish" ref="countDownEl">Mon 12 dec 14:00 WITA</p>
               </div>
               <!-- Action button -->
               <div>
                  <!-- Go to vote page -->
                  <button :disabled="!isEventStart || profile.status"  @click="nextButtton" type="button" class="btn mb-3 text-gray-50 bg-blue-500">
                     Next
                     <i class="text-xs fa fa-chevron-right"></i>
                  </button>
                  <!-- Logout -->
                  <button @click="btnlogout" type="button" class="btn ring-gray-300 bg-gray-200">
                     Logout
                     <i class="text-xs fas fa-sign-out-alt"></i>
                  </button>
               </div>
            </template>
         </SectionCard>
         <!-- End of main Feature -->
         <!-- Profile information -->
         <SectionCard borderColor="border-blue-500">
            <template v-slot:card-content>
               <div class="flex items-center gap-4 md:justify-center md:w-6/12 mx-auto">
                  <!-- Thumbnail -->
                  <span class="md:mr-3">
                     <img :src="profile.gender === 'male' ? 'male.jpg' : 'female.jpg'" class="rounded-full" width="75" />
                  </span>
                  <!-- Personal Profile -->
                  <div class="text-left">
                     <strong>{{ profile.fullname }}</strong>
                     <p class="font-bold text-gray-600">{{ profile.job }}</p>
                     <p class="text-gray-600">{{ profile.status === 1 ? 'Sudah melakukan voting' : 'Belum melakukan voting' }}</p>
                  </div>
               </div>
            </template>
         </SectionCard>
         <!-- End of Profile information -->
      </div>
   </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useEventTitle } from '../stores/eventTitle'
import { usePasscode } from '../stores/passcode'
import SectionCard from '../components/SectionCard.vue'
import Loader from '../components/Loader.vue'
import countDown from '../helper/countDown.js'
import http from '../API/http.js'
import ajax from '@/helper/ajax'

//Routes
const router = useRouter()

//Loader
const isLoader = ref(true)

//Init store
const EventTitle = useEventTitle()
const EventPasscode = usePasscode()

//Render data profile from API
const profile = ref({
   fullname: 'Fulan bin Fulan',
   job_name: 'Dosen',
   status_vote: 0
})

//Get start time, finish time and get Event title, get Bnyak account yg sudah memilih 
const eventStart = ref(0)
const eventFinish = ref(0)
const count = ref(0)

//Get profile
onMounted( async () => {

   // Get userId from local storage
   const userId = localStorage.getItem('evote-himati:userId') || 'null'

   // Get profile
   try {
      const res = await ajax.get(`/user/profile/${ userId }`)
      profile.value = res?.data?.results
      // console.log(res?.data)
   } catch(err) {
      if ( err?.response ) console.log( err?.response?.data )
   }

   //Get event
   try {
      let res = await ajax.get('/user/event')
      res = res?.data?.results

      // Parse data
      eventStart.value = new Date( res.start ).getTime()
      eventFinish.value = new Date( res.end ).getTime()
      count.value = res.hasVoted

      //Save event title into state
      EventTitle.setEventTitle(res.title)

      //Save event passcode into state
      EventPasscode.setPasscode(res.passcode)

      //Trigger loader to hide
      setTimeout(() => {
         isLoader.value = false
      }, 1000)

   } catch(err) {
      if ( err?.response ) console.log( err?.response?.data )
   }
})


//Navigation handler to voting view
const nextButtton = () => {
   setTimeout(() => {
      router.push({ name: 'voting' })
   }, 500)
}

//Navigation handler for logout 
const btnlogout = () => {
      
   localStorage.setItem('evote-himati:userId', '')
   localStorage.setItem('evote-himati:token', '')
   
   setTimeout(() => {
      router.push({ name: 'login' })
   }, 500)
}

//Handler for choose the state

const chooseState = ( start, finish ) => {

   //State belum dimulai
   const now = new Date().getTime()
   
   if ( now < start ) {
      [ isEventStart.value, isEventFinish.value ] = [ false, false ]
      countDownEl.value.innerHTML = new Date(eventStart.value).toLocaleString()
   }
   //State dimulai
   else if ( now >= start && now < finish ) {
      [ isEventStart.value, isEventFinish.value ] = [ true, false ]
   }
   //State berakhir
   else {
      [ isEventStart.value, isEventFinish.value ] = [ false, true ]
   }
}


setInterval(() => {
   //alert(eventStart)
   chooseState(eventStart.value, eventFinish.value)
}, 2000)

//Handler for event state mulai atau belum juga berakhir
const isEventStart = ref(false)
const isEventFinish = ref(true)
const countDownEl = ref(null)

//Jalankan countDown jika isEventStart true
const interval = setInterval(() => {
   countDown(countDownEl.value, eventStart.value, eventFinish.value, after, interval)
}, 1000)

//Create callbackk if countdown finish
const after = () => {
   [ isEventFinish.value, isEventStart.value ] = [ true, false ]
}
</script>