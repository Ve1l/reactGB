import { getGistsFailure, getGistsRequest, getGistsSuccess } from './actions'

export const API_URL_PUBLIC = 'https://api.github.com/gists/public'

export const getAllGists = () => async (dispatch) => {
  dispatch(getGistsRequest())

  try {
    const res = await fetch(API_URL_PUBLIC)

    if (!res.ok) {
      throw new Error(`Request failed with status ${res.status}`)
    }

    const result = await res.json()

    dispatch(getGistsSuccess(result))
  } catch (err) {
    dispatch(getGistsFailure(err.message))
  }
}
