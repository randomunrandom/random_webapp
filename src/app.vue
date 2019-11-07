<template lang="pug">
  div
   h2 test
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class App extends Vue {
  userLang: string = navigator.language;
}
</script>

<style lang="scss" scoped>
  * {
    background: red;
  }
</style>
