import { Address } from '@/domain/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadAddressByZipCode } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'

export class RemoteLoadAddressByZipCode implements LoadAddressByZipCode {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadAddressByZipCode.Model>
  ) {}

  async load (zipCode: string): Promise<Address> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${zipCode}`,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return (httpResponse.body as LoadAddressByZipCode.Model)
      default: throw new UnexpectedError()
    }
  }
}
