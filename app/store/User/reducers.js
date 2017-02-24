import { Map } from 'immutable'
import { combineReducers } from 'redux'

export default combineReducers({
  byId: usersReducer,
  current: currentUserReducer
})

function currentUserReducer (state = Map(), action) {
  switch (action.type) {
    case 'SET_CURRENT_USER':
      return state.set('id', action.id)
    case 'REMOVE_CURRENT_USER':
      return state.set('id', undefined)
    default:
      return state
  }
}

function usersReducer (state = Map(), action) {
  switch (action.type) {
    case 'RECEIVE_USERS':
      return state.merge(action.users)

    default:
      return state
  }
}
