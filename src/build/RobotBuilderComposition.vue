<template>
  <div class="content" v-if="partsStore.parts">
    <CollapsibleSection>
      <div class="preview">
        <div class="preview-content">
          <div class="top-row">
            <img :src="selectedRobot.head.imageUrl" alt="test" />
          </div>
          <div class="middle-row">
            <img :src="selectedRobot.leftArm.imageUrl" class="rotate-left" alt="test" />
            <img :src="selectedRobot.torsos.imageUrl" alt="" />
            <img :src="selectedRobot.rightArm.imageUrl" class="rotate-right" alt="test" />
          </div>
          <div class="bottom-row">
            <img :src="selectedRobot.base.imageUrl" alt="test" />
          </div>
        </div>
        <button class="add-to-cart" @click="addToCart()">Add to cart</button>
      </div>
    </CollapsibleSection>
    <div class="top-row">
      <!-- <div class="top part" :style="headBorderStyle"> -->
      <!-- <div class="top part" :class="{ 'sale-border': selectedRobot.head.onSale }"> -->
      <!-- <div :class="[salesBorderClass, 'top', 'part']"> -->
      <div class="robot-name">
        {{ selectedRobot.head.title }}
        <span class="sale" v-if="selectedRobot.head.onSale">(Sale)</span>
      </div>
      <PartSelector :parts="partsStore.parts.heads" postition="top"
      @partSelected="part => selectedRobot.head = part" />
    </div>
    <div class="middle-row">
      <PartSelector :parts="partsStore.parts.arms" postition="left"
      @partSelected="part => selectedRobot.leftArm = part" />

      <PartSelector :parts="partsStore.parts.torsos" postition="center"
        @partSelected="part => selectedRobot.torsos = part" />

      <PartSelector :parts="partsStore.parts.arms" postition="right"
        @partSelected="part => selectedRobot.rightArm = part" />

    </div>
    <div class="bottom-row">
      <PartSelector :parts="partsStore.parts.bases" postition="bottom"
      @partSelected="part => selectedRobot.base = part" />
    </div>
  </div>
</template>
<script setup>
import { computed, ref, onMounted } from 'vue';
// import parts from '../data/parts';
import PartSelector from './PartSelector.vue';
import CollapsibleSection from '../shared/CollapsibleSection.vue';
import useCartStore from '../stores/cartStore';
import usePartStore from '../stores/partsStores';

const cartStore = useCartStore();
// const { cart, lastRobotCast } = storeToRefs(useCartStore());

const partsStore = usePartStore();
partsStore.getParts(); // setting the state for parts

onMounted(() => console.log('component  mounted')); // Code got executed when the componet got mounted to the dom.
const selectedRobot = ref({
  leftArm: {},
  head: {},
  torsos: {},
  rightArm: {},
  base: {},
});

// const headBorderStyle = computed(() => ({
//  border: selectedRobot.value.head.onSale ? '3px solid red' : '3px solid #aaa'
// }));
const headBorderColor = computed(() => (selectedRobot.value.head.onSale ? 'red' : '#aaa'));
const addToCart = () => {
  const robot = selectedRobot.value;
  const cost = robot.head.cost +
    robot.leftArm.cost +
    robot.torsos.cost +
    robot.rightArm.cost +
    robot.base.cost;
  cartStore.cart.push({ ...robot, cost });
};
</script>

<style lang="scss" scoped>
.part {
  position: relative;
  width: 200px;
  height: 200px;
  border: 3px solid #aaa;
}

.part.top {
  border: 3px solid v-bind(headBorderColor);
}

.part {
  img {
    width: 200px;
  }
}

.top-row {
  display: flex;
  justify-content: space-around;
}

.middle-row {
  display: flex;
  justify-content: center;
}

.bottom-row {
  display: flex;
  justify-content: space-around;
  border-top: none;
}

.top {
  border-bottom: none;
}

.left {
  border-right: none;
}

.right {
  border-left: none;
}

.left img {
  transform: rotate(-90deg);
}

.right img {
  transform: rotate(90deg);
}

.bottom {
  border-top: none;
}

.prev-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  left: -28px;
  width: 25px;
  height: 206px;
}

.next-selector {
  position: absolute;
  z-index: 1;
  top: -3px;
  right: -28px;
  width: 25px;
  height: 206px;
}

.center .prev-selector,
.center .next-selector {
  opacity: 0.8;
}

.left .prev-selector {
  top: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.left .next-selector {
  top: auto;
  bottom: -28px;
  left: -3px;
  width: 179px;
  height: 25px;
}

.right .prev-selector {
  top: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  top: auto;
  bottom: -28px;
  left: 24px;
  width: 179px;
  height: 25px;
}

.right .next-selector {
  right: -3px;
}

.robot-name {
  position: absolute;
  top: -25px;
  text-align: center;
  width: 100%;
}

.sale {
  color: red;
}

.content {
  position: relative;
}

.preview {
  position: absolute;
  top: -20px;
  right: 0;
  width: 310px;
  height: 310px;
  padding: 5px;
}

.preview-content {
  border: 1px solid #999;
}

.preview img {
  width: 70px;
  height: 70px;
}

.rotate-right {
  transform: rotate(90deg);
}

.rotate-left {
  transform: rotate(-90deg);
}

.add-to-cart {
  position: absolute;
  width: 310px;
  padding: 3px;
  font-size: 16px;
}

th,
td {
  text-align: left;
  padding: 5px;
  padding-right: 20px;
}

.cost {
  text-align: right;
}
</style>
