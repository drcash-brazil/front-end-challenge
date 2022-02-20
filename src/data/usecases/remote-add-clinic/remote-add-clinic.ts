import { AddClinicPayload, Clinic } from '@/domain/models'
import { AddClinic } from '@/domain/usecases'
import { UnexpectedError } from '@/domain/errors'

import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteAddClinic implements AddClinic {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<AddClinic.Model>
  ) {}

  async add (clinic: AddClinicPayload): Promise<Clinic> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'post',
      body: clinic
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return (httpResponse.body as AddClinic.Model)
      default: throw new UnexpectedError()
    }
  }
}
