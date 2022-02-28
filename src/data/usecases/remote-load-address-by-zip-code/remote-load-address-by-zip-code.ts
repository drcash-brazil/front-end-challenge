import { Address } from '@/domain/models'
import { UnexpectedError } from '@/domain/errors'
import { LoadAddressByZipCode } from '@/domain/usecases'
import { HttpClient, HttpStatusCode } from '@/data/protocols/http'
import { RemoteAddressModel } from '@/data/models'
import { mapRemoteAddress } from '@/main/utils/helpers'

export class RemoteLoadAddressByZipCode implements LoadAddressByZipCode {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<RemoteAddressModel>
  ) {}

  async load (zipCode: string): Promise<Address> {
    const httpResponse = await this.httpClient.request({
      url: `${this.url}/${zipCode}/json`,
      method: 'get'
    })

    switch (httpResponse.statusCode) {
      case HttpStatusCode.ok: return mapRemoteAddress(httpResponse.body as RemoteAddressModel)
      default: throw new UnexpectedError()
    }
  }
}
