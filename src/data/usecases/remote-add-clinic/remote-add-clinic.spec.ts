import * as faker from 'faker'

import { HttpStatusCode } from '@/data/protocols/http'
import { mockClinic, HttpClientSpy, mockAddClinicPayload } from '@/__mocks__'

import { RemoteAddClinic } from './remote-add-clinic'

type SutTypes = {
  sut: RemoteAddClinic
  httpClientSpy: HttpClientSpy
}

const makeSut = (url: string = faker.internet.url()): SutTypes => {
  const httpClientSpy = new HttpClientSpy()
  const sut = new RemoteAddClinic(url, httpClientSpy)

  return {
    sut,
    httpClientSpy
  }
}

describe('RemoteLoadClinics', () => {
  it('Should call HttpClient with correct values', async () => {
    const url = faker.internet.url()
    const addClinicPayload = mockAddClinicPayload()
    const { sut, httpClientSpy } = makeSut(url)

    await sut.add(addClinicPayload)

    expect(httpClientSpy.url).toBe(url)
    expect(httpClientSpy.method).toBe('post')
    expect(httpClientSpy.body).toBe(addClinicPayload)
  })

  it('Should throw an UnexpectedError if HttpClient does not return 200', async () => {
    const { sut, httpClientSpy } = makeSut()

    httpClientSpy.response = {
      statusCode: HttpStatusCode.notFound
    }
    const promise = sut.add(mockAddClinicPayload())

    await expect(promise).rejects.toThrow()
  })

  it('Should return a Clinic if HttpClient returns 200', async () => {
    const { sut, httpClientSpy } = makeSut()
    const result = mockClinic()
    httpClientSpy.response = {
      statusCode: HttpStatusCode.ok,
      body: result
    }

    const httpResponse = await sut.add(mockAddClinicPayload())

    expect(httpResponse).toEqual(result)
  })
})
