export const API_BASE_URL = window.location.host.includes('localhost')
  ? 'http://localhost:3000/api/v1'
  : `${window.location.host}/api/v1`
