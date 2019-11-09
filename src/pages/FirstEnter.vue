<template lang="pug">
  div
    h2 First Enter
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  @Component({})
  export default class FirstEnter extends Vue {
    userLang: string = navigator.language;
    redirect(lang: string): void {
      switch (lang) {
        case "en-US": {
          this.$router.push("/en/" + "home");
          break;
        }
        default: {
          this.$router.push("/ru/" + "home");
          break;
        }
      }
    }
    mounted() {
      this.redirect(this.userLang);
    }
  }
</script>

<style lang="scss" scoped>
  * {
    background: black;
    color: white;
  }
</style>
