import fakeShopApi from './WorkingwithAPI'
import { AuthData } from '@/model/AuthData'
import { AxiosResponse } from 'axios'

async function authUser (email:string, password:string) {
  const { data } = await fakeShopApi.post<unknown, AxiosResponse<AuthData>>(
    '/auth/login',
    {
      email: email,
      password: password
    }
  )
  console.log(data)
}

export default authUser
