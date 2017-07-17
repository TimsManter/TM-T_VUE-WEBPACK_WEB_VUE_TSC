<template>
  <div>
    <slot></slot>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";{{#material}}
  import VueMaterial from "vue-material";{{/material}}
  import { Component, Watch, Prop } from "vue-ts-decorate";

  @Component()
  export default class BasePage extends Vue {

  }
</script>

<style lang="scss">

</style>
