<template>
  <div class="home">
    <span class="home-text"></span>
    <img alt="Vue logo" src="../assets/img/logo.png" />
    <img alt="Vue logo" src="../assets/img/tab3.png" />
    <Button />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  components: {
    HelloWorld
  }
};
</script>
<style>
.home-text {
  color: blue;
}
</style>
