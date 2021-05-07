import * as actionTypes from './actionTypes';
import { userService } from '../services';
import { history } from '../helpers';
import { toastr } from 'react-redux-toastr'

export const userActions = {
	login,
	signup,
	getAllCities
};

function login(email, password) {
	return dispatch => {
		dispatch(request());
		userService.login(email, password)
			.then(
				user => {
					toastr.success('Success', "Successfully logged in")
					dispatch(success(user));
					window.location.reload();
				},
				error => {
					toastr.error('Error', error.error_message || "Email and password not valid")
					dispatch(failure(error.toString()));
				}
			);
	};

	function request() { return { type: actionTypes.LOGIN_REQUEST } }
	function success(user) { return { type: actionTypes.LOGIN_SUCCESS, payload: { user } } }
	function failure(error) { return { type: actionTypes.LOGIN_FAILED } }
}

function signup(name, email, password) {
	return dispatch => {
		dispatch(request());
		userService.signup(name, email, password)
			.then(
				user => {
					toastr.success('Success', "Registration Successful")
					dispatch(success(user));

					history.push(`/login`);
				},
				error => {
					toastr.error('Error', error.error_message || "Oops Something Went Wrong !")
					dispatch(failure(error.toString()));
				}
			);
	};

	function request() { return { type: actionTypes.SIGNUP_REQUEST } }
	function success(user) { return { type: actionTypes.SIGNUP_SUCCESS, payload: { user } } }
	function failure(error) { return { type: actionTypes.SIGNUP_FAILED } }
}


function getAllCities() {
	return dispatch => {
		dispatch(request());
		userService.getCities()
			.then(
				cities => {
					dispatch(success(cities));
				},
				error => {
					toastr.error('Error', error.error_message || "Please check your credentials")
					dispatch(failure(error.toString()));
				}
			);
	};

	function request() { return { type: actionTypes.GET_CITIES_REQUEST } }
	function success(cities) { return { type: actionTypes.GET_CITIES_SUCCESS, payload: { cities } } }
	function failure(error) { return { type: actionTypes.GET_CITIES_FAILED } }
}
