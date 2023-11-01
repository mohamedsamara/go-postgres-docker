import { API_BASE_URL } from '@/lib/constants'

interface Payload {
  method?: string
  path: string
  body: string | null
}

export class HttpClient {
  private readonly domain: string = API_BASE_URL

  private async sendJSON(method: string, payload: Partial<Payload>): Promise<Response> {
    const request: RequestInit = {
      method,
      body: payload.body
    }

    request.headers = {
      'Content-Type': 'application/json'
    }

    const endpoint = `${this.domain}${payload.path}`

    return fetch(endpoint, request)
  }

  public async post(payload: Partial<Payload>): Promise<Response> {
    return this.sendJSON('POST', payload)
  }

  public async patch(payload: Payload): Promise<Response> {
    return this.sendJSON('PATCH', payload)
  }

  public async put(payload: Partial<Payload>): Promise<Response> {
    return this.sendJSON('PUT', payload)
  }

  public async get(payload: Partial<Payload>): Promise<Response> {
    return this.sendJSON('GET', payload)
  }

  public async delete(payload: Partial<Payload>): Promise<Response> {
    return this.sendJSON('DELETE', payload)
  }
}
