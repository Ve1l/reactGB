import { getGistsFailure, getGistsRequest, getGistsSuccess } from './actions'

export const API_URL_PUBLIC = 'https://api.github.com/gists/public'

export const getAllGists = () => async (dispatch, _, request) => {
  dispatch(getGistsRequest())

  try {
    const { data } = await request.get(API_URL_PUBLIC)

    dispatch(getGistsSuccess(data))
  } catch (err) {
    dispatch(getGistsFailure(err.message))
  }
}
