<style scoped>
   .voting-wrapper {
      @apply mt-16 px-3 py-2;
   }
   
   .voting-wrapper strong {
      @apply text-sm;
   }
   
   .voting-wrapper p {
      @apply text-xs;
   }
</style>

<template>
   <section>
      <div class="voting-wrapper">
         <!-- Pages info -->
         <SectionCard borderColor="border-blue-500">
            <template v-slot:card-content>
               <strong>Halaman Voting</strong>
               <p>Pemilihan Ketua Umum dan Wakil Ketua Umum HIMA TI Polihasnur Tahun 2021/2022</p>
            </template>
         </SectionCard>
      </div>
   </section>
</template>

<script setup>
   import SectionCard from '../components/SectionCard.vue'
</script>