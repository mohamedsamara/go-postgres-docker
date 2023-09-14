import { HttpClient } from './api'

export class PingClient {
  private readonly ROOT_PATH: string = '/ping'
  private readonly httpClient = new HttpClient()

  public async ping(): Promise<string> {
    const path = `${this.ROOT_PATH}`

    const response = await this.httpClient.get({ path })
    const result = await response.json()
    if (response.ok) {
      return result
    }
    throw new Error(`Failed to get ping response. ${result.message}`)
  }
}
