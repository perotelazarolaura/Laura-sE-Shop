import fakeShopApi from './api'
import { AuthData } from '@/models/AuthData'
import { UserData } from '@/models/UserData'
import { ProductData } from '@/models/ProductData'
import { AxiosResponse } from 'axios'

class ApiCalls {
  async authUser (email:string, password:string):Promise<AuthData> {
    const { data } = await fakeShopApi.post<unknown, AxiosResponse<AuthData>>(
      '/auth/login',
      {
        email: email,
        password: password
      }
    )
    return data
  }

  async getCurrentUserData ():Promise<UserData> {
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<UserData>>(
      '/auth/profile'
    )
    return data
  }

  async getAllProducts (filterName:string|undefined = undefined):Promise<ProductData[]> {
    if (!filterName) {
      filterName = undefined
    }
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<ProductData[]>>(
      '/products', { params: { title: filterName } }
    )
    return data
  }

  async getSingleProduct (id:number):Promise<ProductData> {
    const { data } = await fakeShopApi.get<unknown, AxiosResponse<ProductData>>(
      `/products/${id}`
    )
    return data
  }
}

const apiCalls = new ApiCalls()
export default apiCalls
