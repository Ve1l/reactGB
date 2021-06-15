import { combineReducers, createStore, compose, applyMiddleware } from 'redux'
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk'
import { request } from '../api'
import { conversationsReducer } from './conversations'
import { gistsReducer } from './gists'
import { messagesReducer } from './messages'
import { logger, botSendMessage } from './middleware'
import { profileReducer } from './profile'

const persistReducers = persistReducer(
  {
    key: 'root',
    storage,
    whitelist: ['profileReducer'],
  },
  combineReducers({
    messagesReducer,
    conversationsReducer,
    gistsReducer,
    profileReducer,
  })
)

export const store = createStore(
  persistReducers,
  compose(
    applyMiddleware(logger, thunk.withExtraArgument(request), botSendMessage),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (args) => args
  )
)

export const persistor = persistStore(store)
