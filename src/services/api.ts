import axios, { AxiosResponse, AxiosError } from 'axios'

const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': '*',
}

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers,
  proxy: false,
})

export default api
