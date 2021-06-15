import { GET_GISTS_FAILURE, GET_GISTS_START, GET_GISTS_SUCCESS } from './types'

export const getGistsRequest = () => ({
  type: GET_GISTS_START,
})

export const getGistsSuccess = (data) => ({
  type: GET_GISTS_SUCCESS,
  payload: data,
})

export const getGistsFailure = (err) => ({
  type: GET_GISTS_FAILURE,
  payload: err,
})
