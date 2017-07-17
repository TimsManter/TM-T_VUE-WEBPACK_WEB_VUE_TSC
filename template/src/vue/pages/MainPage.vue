<template>
  <base-page>
    <h1>Main page</h1>
  </base-page>
</template>

<script lang="ts">
  import Vue from "vue";{{#material}}
  import VueMaterial from "vue-material";{{/material}}
  import { Component, Watch, Prop } from "vue-ts-decorate";
  import BasePage from "./templates/BasePage.vue"

  export default class MainPage extends Vue {

  }
</script>

<style lang="scss">

</style>
