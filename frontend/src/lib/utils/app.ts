export const handleError = (error: unknown) => {
  let message = 'Unknown Error'
  if (error instanceof Error) message = error.message
  console.log('message', message)
  return message
}

export const decodeToken = (
  token: string
): {
  exp: number
  id: string
} => {
  return JSON.parse(atob(token.split('.')[1]))
}
