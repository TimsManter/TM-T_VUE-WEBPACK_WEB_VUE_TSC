<template>
  <div id="app-container">
    <hello message="outsider"></hello>
    <div id="main-wrapper">{{#router}}
      <md-layout md-gutter id="router-wrapper">
        <router-view></router-view>
      </md-layout>{{/router}}
    </div>
  </div>
</template>

<script lang="ts">
  import Vue from "vue";{{#material}}
  import VueMaterial from "vue-material";{{/material}}
  import { Component, Watch, Prop } from "vue-ts-decorate";
  import Hello from "./components/Hello.vue";

  @Component({ components: { Hello } })
  export default class App extends Vue {
  
  }
</script>

<style lang="scss">

</style>
