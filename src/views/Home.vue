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
      </div>
   </section>
</template>

<script setup>
   import SectionCard from '../components/Home/SectionCard.vue'
</script>

<style scoped>
   .home-wrapper {
      @apply px-3 py-2;
   }
   
   .home-wrapper p {
      @apply text-xs;
   }
   
   .home-wrapper strong {
      @apply text-sm;
   }
</style>