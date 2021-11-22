<style scoped>
   .home-wrapper {
      @apply mt-16 px-3 py-2;
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
      <div class="home-wrapper">
         <!-- Welcome -->
         <SectionCard borderColor="border-blue-500">
            <template v-slot:card-content>
               <strong>Selamat Datang</strong>
               <p>Pemilihan Ketua Umum dan Wakil Ketua Umum HIMA TI Polihasnur Tahun 2021/2022</p>
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
                        2
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
                  <button :disabled="!isEventStart" @click="nextButtton" type="button" class="btn mb-3 text-gray-50 bg-blue-500">
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
               <div class="flex items-center gap-4">
                  <!-- Thumbnail -->
                  <span>
                     <img src="/profile.jpg" class="rounded-full" width="75" />
                  </span>
                  <!-- Personal Profile -->
                  <div class="text-left">
                     <strong>Fulan bin Fulan</strong>
                     <p>Mahasiswa</p>
                     <p>Belum melakukan vote</p>
                  </div>
               </div>
            </template>
         </SectionCard>
         <!-- End of Profile information -->
      </div>
   </section>
</template>

<script setup>
   import { ref, onMounted, watch } from 'vue'
   import { useRouter } from 'vue-router'
   import SectionCard from '../components/SectionCard.vue'
   import countDown from '../utils/countDown.js'
   
   //Routes
   const router = useRouter()
   
   //Navigation handler to voting view
   const nextButtton = () => {
      setTimeout(() => {
         router.push({ name: 'voting' })
      }, 500)
   }
   
   //Navigation handler for logout 
   const btnlogout = () => {
      setTimeout(() => {
         router.push({ name: 'login' })
      }, 500)
   }
   
//Handler for choose the state

   const chooseState = ( start, finish ) => {
      //alert(start, finish)
      //State belum dimulai
      const now = new Date().getTime()
      //alert(now >= start && now < finish)
      if ( now < start ) {
         [ isEventStart.value, isEventFinish.value ] = [ false, false ]
      }
      //State dimulai
      else if ( now >= start && now < finish ) {
         //alert('mulai')
         [ isEventStart.value, isEventFinish.value ] = [ true, false ]
      }
      //State berakhir
      else {
         //alert('akhir')
         [ isEventStart.value, isEventFinish.value ] = [ false, true ]
      }
   }
   
   //Check current state before mounted
   //Get start time and finish time
   const eventStart = ref( new Date('2021 11-22 21:29:35').getTime() )
   const eventFinish = ref( new Date('2021 11-22 21:30').getTime() )
   
   setInterval(() => {
      //alert(eventStart)
      chooseState(eventStart.value, eventFinish.value)
   }, 2000)

   //Handler for event state mulai atau belum juga berakhir
   const isEventStart = ref(false)
   const isEventFinish = ref(true)
   const countDownEl = ref(null)
   
   //Jalankan countDown jika isEventSta rt true
   const interval = setInterval(() => {
      countDown(countDownEl.value, eventStart.value, eventFinish.value, after, interval)
   }, 1000)
   
   //Create callbackk if countdown finish
   const after = () => {
      [ isEventFinish.value, isEventStart.value ] = [ true, false ]
   }
</script>