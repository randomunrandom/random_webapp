<template lang="pug">
  div
    h2 First Enter
</template>

<script lang="ts">
import Vue from 'vue';
import Component from 'vue-class-component';

@Component({})
export default class FirstEnter extends Vue {
  userLang: string = navigator.language;
  mounted() {
    console.log('first enter / root');
  }
}
</script>

<style lang="scss" scoped>
  * {
    background: black;
    color: white;
  }
</style>
