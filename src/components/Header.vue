<template>
   <header class="header">
      <div class="header-wrapper">
         <span>
            <img src="/logo.png" width="55" />
         </span>
         <span>
            <h1 class="text-gray-50 font-semibold">EVOTING HIMA TI</h1>
         </span>
      </div>
   </header>
</template>

<style scoped>
   .header {
      @apply fixed left-0 right-0 top-0 z-40;   
   }
   
   .header-wrapper {
      @apply w-full px-3 py-2 flex items-center gap-2;
      background: var(--secondary);
   }
   
</style>