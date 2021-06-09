import { MESSAGE_SEND } from './types'

const initialState = {
  room1: [
    { author: 'User', message: 'Hi', date: new Date() },
    { author: 'Bot', message: "Hi I'm bot", date: new Date() },
  ],
}

export const messagesReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case MESSAGE_SEND:
      return {
        ...state,
        [payload.roomId]: [
          ...(state[payload.roomId] || []),
          {
            author: payload.author,
            message: payload.message,
            date: new Date(),
          },
        ],
      }
    default:
      return state
  }
}
