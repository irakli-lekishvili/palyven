import { combineReducers } from 'redux'
import Auth from './User/reducers'
import { reducer as formReducer } from 'redux-form'

const appReducer = combineReducers({
  User: Auth,
  form: formReducer
})

const rootReducer = (state, action) => {
  if (action.type === 'RESET_STATE') {
    state = undefined
  }

  return appReducer(state, action)
}

export default rootReducer
