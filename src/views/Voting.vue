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
         <!-- End of Pages Info -->
         <!-- Voting Card Wrapper -->
         <div class="voting-card-wrapper">
            <template v-for="(card, index) in 4" :key="index">
               <!-- Voting card -->
               <VotingCard :cardNumber="index + 1"></VotingCard>
            </template>
         </div>
      </div>
   </section>
</template>

<script setup>
   import SectionCard from '../components/SectionCard.vue'
   import VotingCard from '../components/VotingCard.vue'
</script>