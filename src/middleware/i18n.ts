import Vue from "vue";
import VueI18n from "vue-i18n";
import ru from "locales/ru.yaml";

Vue.use(VueI18n);

const i18n = new VueI18n({
  locale: "ru",
  fallbackLocale: "ru",
  messages: {ru},
  missing: (locale: string, key: string) => {
    console.log(`translation missing: locale=${locale}, key=${key}`);
  }
});

export default i18n;
