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
                  <strong>Akan berakhir dalam</strong>
                  <p>04 : 45 : 44</p>
               </div>
               
               <!-- Action button -->
               <div>
                  <!-- Go to vote page -->
                  <button @click="nextButtton" type="button" class="btn mb-3 text-gray-50 bg-blue-500">
                     Next
                     <i class="text-xs fa fa-chevron-right"></i>
                  </button>
                  <!-- Logout -->
                  <button type="button" class="btn ring-gray-300 bg-gray-200">
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
   import { useRouter } from 'vue-router'
   import SectionCard from '../components/SectionCard.vue'
   
   //Routes
   const router = useRouter()
   
   //Navigation handler to voting view
   const nextButtton = () => {
      setTimeout(() => {
         router.push({ name: 'voting' })
      }, 500)
   }
</script>