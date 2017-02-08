import Layout from '../components/common/Layout'
import {Home, Buttons, Forms, Error} from '../components/pages'

const routes = {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: 'buttons', component: Buttons },
    { path: 'forms', component: Forms },
    { path: '*', component: Error }
  ]
}

export default routes
