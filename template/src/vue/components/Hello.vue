<template>
  <h1>Hello, {{ message }}!</h1>
</template>

<script lang="ts">
  import Vue from "vue";{{#material}}
  import VueMaterial from "vue-material";{{/material}}
  import { Component, Watch, Prop } from "vue-ts-decorate";

  export default class Hello extends Vue {
    @Prop()
    message: string;
  }
</script>

<style lang="scss">

</style>
