import { HttpClient, HttpRequest, HttpResponse, HttpStatusCode } from '@/data/protocols/http/http-client'
import * as faker from 'faker'

export const mockHttpRequest = (): HttpRequest => ({
  url: faker.internet.url(),
  method: faker.random.arrayElement(['get', 'post']),
  body: faker.random.objectElement(),
  headers: faker.random.objectElement()
})

export class HttpClientSpy<R = any> implements HttpClient<R> {
  url?: string
  method?: string
  body?: any
  headers?: any
  response: HttpResponse<R> = {
    statusCode: HttpStatusCode.ok
  }

  async request (data: HttpRequest): Promise<HttpResponse<R>> {
    this.url = data.url
    this.method = data.method
    this.body = data.body
    this.headers = data.headers
    return this.response
  }
}
