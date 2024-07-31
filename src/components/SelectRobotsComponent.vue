<script setup lang="ts">
import { useRobotsStore } from '@/stores/robots';
import Multiselect from '@/ui/Multiselect.vue';
import { onUpdated } from 'vue';



const robotsState = useRobotsStore()



onUpdated(() => {
  console.log(robotsState.selectedRobots)
})


</script>

<template>
  <div class="max-w-[600px] w-full">
    <Multiselect v-model="robotsState.selectedRobots" :options="robotsState.robots" placeholder="Add up to 5 robots" :maxSelected="5" />
  </div>
</template>
