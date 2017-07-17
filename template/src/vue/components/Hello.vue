<template>
  <h1>Hello, {{ message }}!</h1>
</template>

<script lang="ts">
  import Vue from "vue";
  import { Component, Watch, Prop } from "vue-ts-decorate";

  @Component()
  export default class Hello extends Vue {
    @Prop()
    message: string;
  }
</script>

<style lang="scss">

</style>
