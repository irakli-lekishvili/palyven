import { connect } from 'react-redux'
import * as UserSelectors from 'store/User/selectors'

const connectState = state => ({
  currentUser: UserSelectors.current(state)
})
const enhancer = connect(connectState, null)

class Dodge extends React.Component {
  static contextTypes = {
    router: React.PropTypes.object.isRequired
  }

  componentWillReceiveProps (nextProps) {
    if (!nextProps.currentUser)
      this.context.router.push('/')
  }

  render () {
    return (
      <img
        style={{width: 200, height: 200}}
        src='http://i0.kym-cdn.com/photos/images/original/000/581/296/c09.jpg'
      />
    )
  }
}

export default enhancer(Dodge)
