import { GET_GISTS_FAILURE, GET_GISTS_START, GET_GISTS_SUCCESS } from './types'

const initialState = {
  gists: [],
  error: null,
  pending: false,
}

export const gistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_GISTS_START:
      return {
        ...state,
        pending: true,
      }
    case GET_GISTS_SUCCESS:
      return {
        ...state,
        gists: action.payload,
        pending: false,
      }
    case GET_GISTS_FAILURE:
      return {
        ...state,
        pending: false,
        error: action.payload,
      }
    default:
      return state
  }
}
