import { MESSAGE_SEND, ROOM_DELETE } from './types'

const initialState = {
  room1: [
    { author: 'User', message: 'Hi', date: new Date() },
    { author: 'Bot', message: "Hi I'm bot", date: new Date() },
  ],
}

const createReducer = (initialState, handlers) => {
  return function reducer(state = initialState, action) {
    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](state, action)
    }

    return state
  }
}

export const messagesReducer = createReducer(initialState, {
  [MESSAGE_SEND]: (state, { payload }) => ({
    ...state,
    [payload.roomId]: [
      ...(state[payload.roomId] || []),
      { ...payload, date: new Date() },
    ],
  }),
  [ROOM_DELETE]: (state, { payload }) => ({
    ...state,
    [payload.roomId]: [{}],
  }),
})
