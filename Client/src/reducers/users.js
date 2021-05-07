import * as actionTypes from '../actions/actionTypes'

const initialState = {
  loading: false,
  cities: [],
  user: {},
  getCitiesLoading: false,
  loggingIn: false,
  signingIn: false,
};

const users = (state=initialState, action) => {

  switch(action.type){
    case actionTypes.GET_CITIES_REQUEST:
       return {...state, getCitiesLoading: true}

    case actionTypes.GET_CITIES_FAILED:
      return {...state, getCitiesLoading: false}

    case actionTypes.GET_CITIES_SUCCESS:
      return {...state, getCitiesLoading: false, cities: action?.payload?.cities?.data}

  	case actionTypes.LOGIN_REQUEST:
  	   return {...state, loggingIn: true}

  	case actionTypes.LOGIN_FAILED:
  		return {...state, loggingIn: false}

    case actionTypes.LOGIN_SUCCESS:
      return {...state, loggingIn: true, currentUser: action.payload.user}

    case actionTypes.SIGNUP_REQUEST:
       return {...state, signingIn: true}

    case actionTypes.SIGNUP_FAILED:
      return {...state, signingIn: false}

    case actionTypes.SIGNUP_SUCCESS:
      return {...state, signingIn: true}

    default: 
      return {...state, loading: false} 
  }  
}

export default users

