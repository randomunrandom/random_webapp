<template lang="pug">
  div
    router-view
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component({})
  export default class LangTemplate extends Vue {}
</script>

<style lang="scss" scoped>
  * {
    background: orange;
  }
</style>
