<template>
  <h1 class="text-center">Evote App : {{ counter.count }}</h1>
  <router-view></router-view>
</template>

<script setup>

  import { useCounter } from './stores/counter'


  const counter = useCounter()
  

</script>
