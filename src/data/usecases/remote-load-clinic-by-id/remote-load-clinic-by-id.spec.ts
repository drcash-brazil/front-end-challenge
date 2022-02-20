import * as faker from 'faker'

import { HttpStatusCode } from '@/data/protocols/http'
import { mockClinic, HttpClientSpy } from '@/__mocks__'
import { RemoteLoadClinicById } from './remote-load-clinic-by-id'

type SutTypes = {
  sut: RemoteLoadClinicById
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteLoadClinicById(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadClinics', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)

    await sut.load('123')

    expect(httpClientSpy.url).toBe(`${url}/123`)
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

  it('Should return a Clinic if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const result = mockClinic()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: result
    }

    const httpResponse = await sut.load('123')

    expect(httpResponse).toEqual(result)
  })
})
