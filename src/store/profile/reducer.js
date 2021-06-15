import {
  INPUT_PROFILE,
  TOGGLE_PROFILE_CHECKBOX,
  UPDATE_USER_NAME,
} from './types'

const initialState = {
  value: '',
  isToggle: true,
  name: 'Bogdan',
}

export const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_PROFILE_CHECKBOX:
      return {
        ...state,
        isToggle: !state.isToggle,
      }
    case UPDATE_USER_NAME:
      return {
        ...state,
        name: state.value,
        value: '',
      }
    case INPUT_PROFILE:
      return {
        ...state,
        value: action.payload,
      }
    default:
      return state
  }
}
