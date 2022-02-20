import { Clinic } from '@/domain/models'
import { LoadClinics } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { UnexpectedError } from '@/domain/errors'

export class RemoteLoadClinics implements LoadClinics {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadClinics.Model>
  ) {}

  async load (): Promise<Clinic[]> {
    const httpResponse = await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return (httpResponse.body as LoadClinics.Model)
      default: throw new UnexpectedError()
    }
  }
}
