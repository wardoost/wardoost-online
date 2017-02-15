import Layout from '../components/common/Layout'
import Home from '../components/pages/Home'
import Error from '../components/pages/Error'

const routes = {
  path: '/',
  component: Layout,
  indexRoute: { component: Home },
  childRoutes: [
    { path: '*', component: Error }
  ]
}

export default routes
