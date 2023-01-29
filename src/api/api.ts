import axios, { AxiosHeaders } from 'axios'
import store from '@/store'

const fakeShopApi = axios.create({
  baseURL: 'https://api.escuelajs.co/api/v1'
})

fakeShopApi.interceptors.request.use((config) => {
  const token = store.state.authData?.access_token ?? ''
  if (token) {
    (config.headers as AxiosHeaders).set('Authorization', `Bearer ${token}`)
  }
  return config
})

export default fakeShopApi
