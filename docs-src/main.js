import Kdu from 'kdu'
import App from './App.kdu'
import router from './router'
import store from './store'
import KduUiFramework from '../'
import '../dist/kdu-ui.css'

Kdu.use(KduUiFramework, /* {
  ktooltip: {
    themes: {
      tooltip: {
        delay: 2000,
      },
    },
  },
} */)

Kdu.config.productionTip = false

Kdu.prototype.log = (...args) => {
  console.log(...args)
}

new Kdu({
  router,
  store,
  ...App,
}).$mount('#app')
