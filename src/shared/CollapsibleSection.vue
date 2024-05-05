<template>
  <div class="mytest">
    <div class="header"  >
      <span v-if="open" @click="open = !open">&#x25B2; Collapse</span>
      <span v-if="!open" @click="open = !open">&#x25BC; Expand</span>
    </div>
    <slot v-if="open"></slot>
  </div>
</template>

<script setup>
import { ref } from 'vue';

// initialize the variable 'open' with the value 'true'
const open = ref(true);
</script>

<style scoped>
.header {
  background-color: #bbb;
  padding: 3px;
  cursor: pointer;
  font-size: 22px;
}
</style>
