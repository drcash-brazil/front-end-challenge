import { Clinic } from '@/domain/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadClinicById } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteLoadClinicById implements LoadClinicById {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadClinicById.Model>
  ) {}

  async load (id: string): Promise<Clinic> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${id}`,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return (httpResponse.body as LoadClinicById.Model)
      default: throw new UnexpectedError()
    }
  }
}
