<template>
  <div style="padding: 10px; margin-bottom: 20px ;">
    <h1 class="p-text-center" style="margin: 0px">
      Todo <span style="font-weight: 100">2021</span>
    </h1>
  </div>
  <router-view></router-view>
  <FooterAction />
</template>

<script setup>
import store from "./store/index";
import { provide } from "vue";
import FooterAction from "./components/FooterAction.vue";
// when you need uuid https://www.npmjs.com/package/uuid

provide("store", store);
</script>

<style>
body {
  margin: 0px;
  background-color: #f0f0f5;
  font-family: "Roboto", sans-serif;
}
</style>
