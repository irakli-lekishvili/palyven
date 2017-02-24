import { Provider } from 'react-redux'
import store from 'store/store'
import Routes from 'routes'

class Root extends React.Component {
  render () {
    return (
      <Provider store={store}>
        <Routes />
      </Provider>
    )
  }
}

export default Root
