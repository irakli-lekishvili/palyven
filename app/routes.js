import { Router, Route, browserHistory } from 'react-router'
import {
  App,
  Home,
  Signin,
  Dodge
} from 'containers'

export default class Routes extends React.Component {
  requireAuth (nextState, replace, callback) {
    const token = window.localStorage.getItem('auth_token')
    if (!token) replace('/signin')
    return callback()
  }

  render () {
    return (
      <Router history={browserHistory}>
        <Route component={App}>
          <Route path='/' component={Home} />
          <Route path='/signin' component={Signin} />
          <Route path='/dodge' component={Dodge} onEnter={this.requireAuth} />
        </Route>
      </Router>
    )
  }
}
