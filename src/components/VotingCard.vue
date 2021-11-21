<style scoped>
   .voting-card strong {
      font-size: .75rem;
   }
   
   .voting-card p {
      font-size: .55rem;
   }
   
   .dropdown {
      @apply mt-8 duration-300 text-left bg-gray-100 p-3 rounded-lg;
   }
   
   .dropdown input[type=password]::placeholder {
      font-size: .7rem;
   }
</style>

<template>
   <SectionCard :borderColor="isEven(cardNumber) ? 'border-blue-500' : 'border-green-500'">
      <template v-slot:card-content>
         <section class="voting-card">
            <!-- Nomor Paslon here -->
            <span class="bg-gray-100 block w-full rounded text-gray-600 py-1">
               {{ cardNumber }}
            </span>
            <!-- Profile paslon here -->
            <div class="flex justify-between mt-4">
               <!-- Calon ketua umum -->
               <div>
                  <img src="/profile.jpg" width="85" class="mx-auto rounded-full" />
                  <span class="block">
                     <strong>Fulan bin Fulan</strong>
                     <p>Calon Ketua Umum</p>
                  </span>
               </div>
               <!-- Calon wakil ketua umum -->
               <div>
                  <img src="/profile.jpg" width="85" class="mx-auto rounded-full" />
                  <span class="block">
                     <strong>Fulan bin Fulan</strong>
                     <p>Calon Wakil Ketua Umum</p>
                  </span>
               </div>
            </div>
            <!-- Action button -->
            <button  @click="dropDown = !dropDown" type="button" :class="isEven(cardNumber) ? 'bg-blue-500' : 'bg-green-500 ring-green-400'" class="btn mt-5 text-gray-50">
               Vote
               <i class="duration-300 text-xs fa" :class="dropDown ? 'fa-chevron-down' : 'fa-chevron-right'"></i>
            </button>
            <!-- Dropdown element for confirm -->
            <div class="dropdown" v-if="dropDown">
               <small>Konfirmasi pilihan anda</small>

               <input class="text-sm mt-2 p-2 border-2 border-gray-300 bg-gray-50 rounded-lg w-full" type="password" placeholder="Masukkan kata sandi anda"/>

               <button @click="btnConfirm" :class="isEven(cardNumber) ? 'bg-blue-600' : 'bg-green-600 ring-green-400'" class="btn text-gray-50 mt-3">
                  <!-- Default state -->
                  <span v-if="!isProcess && !isSuccess" class="text-xs">Confirm</span>

                  <!-- Process state -->
                  <span v-if="isProcess && !isSuccess" class="spinner text-xs">
                     <i class="text-xs fa fa-spinner"></i>
                  </span>
                  
                  <!-- Success state -->
                  <span v-if="isSuccess && !isProcess" class="text-xs">
                     <i class="text-xs fa fa-check"></i>
                  </span>
               </button>
            </div>
         </section>
      </template>
   </SectionCard>
</template>

<script setup>
   import { ref } from 'vue'
   import { useTextAlert } from '../stores/textAlert'
   import SectionCard from './SectionCard.vue'
   
   //Instance Stores
   const Alert = useTextAlert()
   
   //Define props
   const props = defineProps({
      cardNumber: {
         type: Number,
         default: 1
      }
   })
   
   //Define Emits
   const emits = defineEmits(['processDone', 'statusOk', 'statusFail'])
   
   //Handler anmation for button
   const isProcess = ref(false)
   const isSuccess = ref(false)
   const btnConfirm = () => {
      setTimeout(() => {
         [ isProcess.value, isSuccess.value ] = [ true, false ]
         
         setTimeout(() => {
            [ isProcess.value, isSuccess.value ] = [ false, true ]
            emits('processDone')
            emits('statusOk')
            //Alert.inputText('Maaf, anda telah melakukan vote sebelumnya')
         }, 2000)
      }, 300)
   }
   
   //Dropdown animation
   const dropDown = ref(false)
   
   //Handler to cek cardNumber is even ?
   const isEven = num => num % 2 === 0 ? true : false
</script>
