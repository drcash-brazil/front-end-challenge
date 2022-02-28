import * as faker from 'faker'

import { HttpStatusCode } from '@/data/protocols/http'
import { mockClinic, HttpClientSpy } from '@/__mocks__'
import { RemoteLoadAddressByZipCode } from './remote-load-address-by-zip-code'
import { mockRemoteAddressModel } from '@/__mocks__/mock-address'

type SutTypes = {
  sut: RemoteLoadAddressByZipCode
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteLoadAddressByZipCode(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadAddressByZipCode', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    const zipCode = '01001-001'

    await sut.load(zipCode)

    expect(httpClientSpy.url).toBe(`${url}/${zipCode}`)
    expect(httpClientSpy.method).toBe('get')
  })

  it('Should throw an UnexpectedError if HttpClient does not return 200', async () => {
    const { sut, httpClientSpy } = makeSut()

    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.load('123')

    await expect(promise).rejects.toThrow()
  })

  it('Should return an Address if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const result = mockRemoteAddressModel()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: result
    }

    const httpResponse = await sut.load('123')

    expect(httpResponse).toEqual(result)
  })
})
