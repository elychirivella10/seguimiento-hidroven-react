import Axios from "axios";
import md5 from 'md5'
const TOKEN_KEY = md5('TokenIncidencia');

export function setToken(token) {
  localStorage.setItem(TOKEN_KEY, token);
}
export function getToken() {
  return localStorage.getItem(TOKEN_KEY);
}

export function deleteToken(e) {
  localStorage.removeItem(TOKEN_KEY);
  if (getToken() === null) {
    return true
  }
  
}

export async function getCurrentUser() {
  if (!getToken()) return false;
  try {
    let response = await Axios.get("/api/v1/auth/current");
    return response.data;
  } catch (error) {
    return false;
  }
}

export function initAxiosInterceptors() {
  Axios.defaults.headers.post['Content-Type'] = 'application/json'
  Axios.interceptors.request.use(config => {
    const token = getToken()
    
    if (token) {
      
      config.headers.Authorization = `Bearer ${token}`
    }

    return config
  });

  Axios.interceptors.response.use(
    response => response,
  );
}
