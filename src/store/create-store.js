import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { conversationsReducer } from './conversations'
import { gistsReducer } from './gists'
import { messagesReducer } from './messages'

export const store = createStore(
  combineReducers({
    messagesReducer,
    conversationsReducer,
    gistsReducer,
  }),
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : () => {}
  )
)
