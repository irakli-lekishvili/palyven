import { connect } from 'react-redux'
import SigninForm from './SigninForm'
import * as UserActions from 'store/User/actions'
import * as UserSelectors from 'store/User/selectors'

const connectProps = { ...UserActions }
const connectState = state => ({
  currentUser: UserSelectors.current(state)
})

const enhancer = connect(connectState, connectProps)

class Signin extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillReceiveProps (nextProps) {
    if (nextProps.currentUser)
      this.context.router.push('/dodge')
  }

  signin (form) {
    this.props.signin(form)
  }

  render () {
    return (
      <div>
        <SigninForm onSubmit={::this.signin} />
      </div>
    )
  }
}

export default enhancer(Signin)
