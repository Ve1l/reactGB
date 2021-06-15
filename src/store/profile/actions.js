import {
  INPUT_PROFILE,
  TOGGLE_PROFILE_CHECKBOX,
  UPDATE_USER_NAME,
} from './types'

export const toggleCheckBox = () => {
  return { type: TOGGLE_PROFILE_CHECKBOX }
}

export const handleChangeInput = (value) => {
  return { type: INPUT_PROFILE, payload: value }
}

export const upateUserName = () => {
  return { type: UPDATE_USER_NAME }
}
