import { MESSAGE_SEND, ROOM_DELETE } from './types'

export const sendMessage = (params) => {
  return {
    type: MESSAGE_SEND,
    payload: params,
  }
}

export const roomDelete = (params) => {
  return {
    type: ROOM_DELETE,
    payload: params,
  }
}
