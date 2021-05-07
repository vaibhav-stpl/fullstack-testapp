import { combineReducers } from "redux"
import { routerReducer } from "react-router-redux"
import {reducer as toastrReducer} from 'react-redux-toastr'

import users from './users';

export default combineReducers({
  users: users,
  toastr: toastrReducer,
  router: routerReducer
})

