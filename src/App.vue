<template lang="pug">
  div
    h2 app
    p {{$i18n.messages}}
    p {{diff_locales}}
    p {{available_locales}}
    select
      option(
        v-for="(lang, i) in diff_locales"
        :key="i"
        :value="lang['locale']"
        @click="change_lang(lang['locale'])"
        ) {{ lang["name"] }}
    p
      router-link(to="home") Go to Home
    p
      router-link(to="about") Go to About
    p {{$t('hello')}}
    router-view
</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";

  interface LocaleSetting {
    locale: string;
    name: string;
  }

  @Component({})
  export default class App extends Vue {
    locales: LocaleSetting[] = [
      {
        locale: "ru",
        name: "Русский"
      },
      {
        locale: "en",
        name: "English"
      }
    ];

    available_locales: string[] = this.locales.map((el) => {
      return el["locale"];
    });

    get diff_locales(): LocaleSetting[] {
      return this.locales.filter((el: LocaleSetting): boolean => {
        return el.locale !== this.$root.$i18n.locale;
      });
    }

    change_lang(locale: string): void {
      if (this.available_locales.includes(locale)) {
        let path: string = window.location.pathname;
        let res: string = path.replace(/(\/)(?:\w+)(\/\S*)/, `$1${locale}$2`);
        this.$router.push(res);
      } else {
        console.log("locale not acceptable");
      }
    }
  }
</script>

<style lang="scss" scoped>
  * {
    background: red;
  }
</style>
