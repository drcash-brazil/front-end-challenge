import { Clinic } from '@/domain/models'
import { LoadClinics } from '@/domain/usecases'
import { HttpClient } from '@/data/protocols/http'

export class RemoteLoadClinics implements LoadClinics {
  constructor (
    private readonly url: string,
    private readonly httpClient: HttpClient<LoadClinics.Model>
  ) {}

  async load (): Promise<Clinic[]> {
    await this.httpClient.request({
      url: this.url,
      method: 'get'
    })

    return new Promise(resolve => resolve([]))
  }
}
