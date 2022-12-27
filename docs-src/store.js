import Kdu from 'kdu'
import Kdux from 'kdux'

Kdu.use(Kdux)

export default new Kdux.Store({
  state: {
    theme: 'default',
  },
  mutations: {
    'SWITCH_THEME': (state, value) => {
      state.theme = value
      localStorage.setItem('kdu-ui:theme', value)
      const el = document.getElementsByTagName('html')[0]
      if (value !== 'default') {
        el.classList.add('kdu-ui-dark-mode')
      } else {
        el.classList.remove('kdu-ui-dark-mode')
      }
      if (value !== 'high-contrast') {
        el.classList.remove('kdu-ui-high-contrast')
      } else {
        el.classList.add('kdu-ui-high-contrast')
      }
    },
  },
  actions: {

  },
})
