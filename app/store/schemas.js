import { Schema } from 'normalizr-immutable'
import User from './User/record'

const schemas = {
  user: new Schema('users', User)
}

export default schemas
