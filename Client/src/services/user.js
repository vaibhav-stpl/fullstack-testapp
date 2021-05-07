import axiosInstance from './api';

export const userService = {
    login,
    signup,
    getCities
};

function login(email, password) {
    return axiosInstance.post(`/api/login`, { email, password })
        .then(user => {
            console.log('1111111', user);
            sessionStorage.setItem('user', JSON.stringify(user.data));
            return user.data;
        });
}

function signup(name, email, password) {
    return axiosInstance.post(`/api/signup`, { name, email, password })
        .then(response => {
            console.log(response);
            return response;
        });
}

function getCities() {
    return axiosInstance.get(`/api/cities`)
        .then(response => {
            console.log(response);
            return response;
        });
}
