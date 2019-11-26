<template lang="pug">
  v-app
    v-system-bar(app)

    v-navigation-drawer(app v-model="drawer")
      v-row(justify="space-around")
        v-avatar.pt-5.pb-2(size=128)
          v-img(src="https://randomuser.me/api/portraits/men/10.jpg")
      v-list-item
        v-list-item-content
          v-list-item-title {{ $t('name') }}
          v-list-item-subtitle {{ $t('title') }}
      v-list
        v-list-item(
          v-for="(item, i) in navItems"
          :key="i"
          link
          :to="item.link"
        )
          v-list-item-icon
            v-icon {{ item.icon }}
          v-list-item-content
            v-list-item-title {{ item.name }}
        v-list-item
          v-switch(
            v-model="$vuetify.theme.dark"
            :label="$t('change_theme')"
          )

    v-app-bar(app dense flat)
      v-app-bar-nav-icon(@click.stop="drawer = !drawer")
      v-spacer
      v-toolbar-title {{}}

    v-content
      v-container(fluid transition="slide-x-transition")
        router-view

    v-footer(app padless)
      v-card.red.lighten-3.text-center(flat tile width='100%')
        v-card-text
          | &copy; 2019 &mdash;&nbsp;
          strong {{ $t('all.name') }}&nbsp;
          | All Rights Reserved

    //- div
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

</template>

<script lang="ts">
  import Vue from "vue";
  import Component from "vue-class-component";
  import { mdiHome, mdiInformation, mdiClockStart } from "@mdi/js";

  // interface LocaleSetting {
  // locale: string;
  // name: string;
  // }
  interface NavigationItem {
    icon: any;
    name: string;
    link: string;
  }

  @Component({})
  export default class App extends Vue {
    drawer: Boolean = true;

    navItems: NavigationItem[] = [
      { icon: mdiHome, name: "Home", link: "home" },
      { icon: mdiInformation, name: "About", link: "about" }
      // {icon: mdiClockStart, name: 'Clock-in', link: ''},
    ];

    // locales: LocaleSetting[] = [
    // {
    // locale: "ru",
    // name: "Русский"
    // },
    // {
    // locale: "en",
    // name: "English"
    // }
    // ];

    // available_locales: string[] = this.locales.map((el) => {
    // return el["locale"];
    // });

    // get diff_locales(): LocaleSetting[] {
    // return this.locales.filter((el: LocaleSetting): boolean => {
    // return el.locale !== this.$root.$i18n.locale;
    // });
    // }

    // change_lang(locale: string): void {
    // if (this.available_locales.includes(locale)) {
    // let path: string = window.location.pathname;
    // let res: string = path.replace(/(\/)(?:\w+)(\/\S*)/, `$1${locale}$2`);
    // this.$router.push(res);
    // } else {
    // console.log("locale not acceptable");
    // }
    // }
  }
</script>

<style lang="scss" scoped>
  #app {
    background: linear-gradient(pink, lightblue);
  }
</style>
