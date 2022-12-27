import Kdu from 'kdu'
import Router from 'kdu-router'
import Home from './views/Home.kdu'
import About from './views/About.kdu'
import demos from './demo-routes'

Kdu.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/about',
      name: 'about',
      component: About,
    },
    {
      path: '/demo',
      component: Home,
      children: demos,
    },
  ],
})
