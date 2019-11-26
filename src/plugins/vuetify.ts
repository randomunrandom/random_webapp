import Vue from "vue";
import Vuetify from "vuetify/lib";
import LRU from "lru-cache";

import i18n from "./i18n";

Vue.use(Vuetify);

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 * 6
});

let config: any = {
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    // dark: true,
    options: {
      themeCache,
      minifyTheme: function(css: any) {
        return process.env.NODE_ENV === "production"
          ? css.replace(/[\r\n|\r|\n]/g, "")
          : css;
      }
    }
  },
  lang: {
    t: (key: string, ...params: any) => i18n.t(key, params)
  }
};
export default new Vuetify(config);
