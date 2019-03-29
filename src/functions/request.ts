import { configs } from '../configs'

interface Config {
  readonly token: string
}

interface GetConfig {}

export const requestToGet = (path: string, { token }: Config & GetConfig = {} as any) =>
  fetch(configs.ProxyUrl + path, {
    method: 'get',
    mode: 'cors',
    headers: {
      Authorization: token
    }
  })

interface PostConfig {
  readonly data?: any
}

export const requestToPost = (path: string, { token }: Config & PostConfig = {} as any) =>
  fetch(configs.ProxyUrl + path, {
    method: 'post',
    mode: 'cors',
    headers: {
      Authorization: token
    }
  })
