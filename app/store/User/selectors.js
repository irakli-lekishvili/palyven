import { createSelector } from 'reselect'

export const all = state => state.User.byId
export const byId = (state, id) => state.User.byId.get(id)
export const currentId = state => state.User.current.get('id')

export const current = createSelector(
  [all, currentId],
  (users, id) => {
    const user = users.get(id)
    if (!user) return null

    return user
  }
)
