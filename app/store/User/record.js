import { Record } from 'immutable'

const UserRecord = Record({
  id: null,
  email: ''
})

export default class User extends UserRecord {
}
