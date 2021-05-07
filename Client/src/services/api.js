import axios from 'axios'

const baseUrl = `${process.env.REACT_APP_API_URL}`;

const getUserToken = () => {
  let token = '';
  const userDetails = sessionStorage.getItem("user")
  if (userDetails) {
    token = userDetails ? JSON.parse(userDetails).token : '';
  }
  return token;
}


const axiosInstance = axios.create({
    baseURL: baseUrl,
    withCredentials: false,
    crossDomain: true,
    headers: {
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${getUserToken && getUserToken()}`,
    }
})

export default axiosInstance;

