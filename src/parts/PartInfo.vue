<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>{{ part.description }}</div>
  </div>
</template>
<script setup>
import { computed } from 'vue';
// import parts from '../data/parts';
import usePartStore from '../stores/partsStores';

const partStore = usePartStore();
const props = defineProps(['partType', 'id']);
const part = computed(() => partStore.parts[props.partType].find((val) => val.id === +props.id));
</script>
