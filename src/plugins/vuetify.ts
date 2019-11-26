import Vue from "vue"
import Vuetify from "vuetify/lib"
import LRU from "lru-cache"

Vue.use(Vuetify);

const themeCache = new LRU({
  max: 10,
  maxAge: 1000 * 60 * 60 * 6,
})

export default new Vuetify({
  icons: {
    iconfont: "mdiSvg"
  },
  theme: {
    options: {
      themeCache,
      minifyTheme: function (css) {
        return process.env.NODE_ENV === 'production'
          ? css.replace(/[\r\n|\r|\n]/g, '')
          : css
      },
    }
  }
});
