<template>
   <section>
      <div :class="borderColor" class="section-card-wrapper">
         <slot name="card-content"></slot>
      </div>
   </section>
</template>

<style scoped>
   .section-card-wrapper {
      @apply text-center bg-gray-50 px-4 py-3 rounded-lg shadow border-l-8;
   }
</style>

<script setup>
   
   //Define props
   const props = defineProps({
      borderColor: {
         type: String,
         default: 'border-green-500'
      }
   })
</script>