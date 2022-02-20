import * as faker from 'faker'

import { HttpStatusCode } from '@/data/protocols/http'
import { HttpClientSpy } from '@/__mocks__/mock-http'

import { RemoteLoadClinics } from './remote-load-clinics'

type SutTypes = {
  sut: RemoteLoadClinics
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteLoadClinics(url, httpClientSpy)
  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadClinics', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const { sut, httpClientSpy } = makeSut(url)
    await sut.load()
    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('get')
  })

  it('Should throw an UnexpectedError  if HttpClient does not return 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.load()
    await expect(promise).rejects.toThrow()
  })
})
