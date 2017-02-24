import { connect } from 'react-redux'
import { Link } from 'react-router'
import * as UserActions from 'store/User/actions'
import * as UserSelectors from 'store/User/selectors'
import { SigninOrSignup } from 'containers'

const connectState = state => ({
  currentUser: UserSelectors.current(state)
})
const connectProps = { ...UserActions }
const enhancer = connect(connectState, connectProps)

class App extends React.Component {
  static propTypes = {
    children: React.PropTypes.node.isRequired
  }

  componentWillMount () {
    this.props.reAuthenticateUser()
  }

  render () {
    const { currentUser, signout } = this.props

    return (
      <div>
        { this.props.children }
        <SigninOrSignup user={currentUser} signout={signout} />
        { currentUser &&
          <Link to={'/dodge'}>Check you secret dodge</Link>
        }
      </div>
    )
  }
}

export default enhancer(App)
