<template>
  <div id="app">
    <h2 class="aaa">hello world！</h2>
    <img src="./assets/logo.jpg" alt="">
    <router-view/>
  </div>
</template>
<script>
/* eslint-disable */
import axios from "axios";
import api from "../mock/api.js";
const a = ''
export default {
  async created() {
    let res = await axios.get(api.getUserInfo);
    console.log(res);
  }
};
</script>
<style lang="scss">
$black: black;
$yellow: red;

h2 {
  font-size: 40pt;
  color: $black;
  background: $yellow;
  text-align: center;
}
</style>
