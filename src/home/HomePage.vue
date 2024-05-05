<template>
  <div class="home">
    <div>
      <img class="robot" src="../assets/robot-home.png" alt="Robot" aria-hidden="true">
    </div>
    <div class="get-started">
      <router-link class="nav-link" to="/build">Get started</router-link> Building your first rebot
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.home {
  text-align: center;
}

.robot {
  height: 500px;
}

.get-started {
  padding-top: 20px;
  font-size: 32px;
}
</style>
