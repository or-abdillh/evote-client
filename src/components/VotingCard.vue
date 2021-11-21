<style scoped>
   .voting-card strong {
      font-size: .75rem;
   }
   
   .voting-card p {
      font-size: .55rem;
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
            <button type="button" :class="isEven(cardNumber) ? 'bg-blue-500' : 'bg-green-500'" class="btn mt-5 text-gray-50">
               Vote
               <i class="text-xs fa fa-chevron-right"></i>
            </button>
         </section>
      </template>
   </SectionCard>
</template>

<script setup>
   import SectionCard from './SectionCard.vue'
   //Define props
   const props = defineProps({
      cardNumber: {
         type: Number,
         default: 1
      }
   })
   
   //Handler to cek cardNumber is even ?
   const isEven = num => num % 2 === 0 ? true : false
</script>