import axios from 'axios'

const baseURL = `http://api.openweathermap.org/data/2.5`

const API_KEY = process.env.NEXT_PUBLIC_API_KEY

const api = axios.create({
  baseURL
})

api.interceptors.request.use((config) => {
  const { url } = config
  config.url = `${url}&APPID=${API_KEY}`
  return config
})

export default api
