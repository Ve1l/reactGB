import './global.css'
import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { Provider, useDispatch, useSelector } from 'react-redux'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { PersistGate } from 'redux-persist/integration/react'
import { Chat } from './pages'
import {
  store,
  getAllGists,
  toggleCheckBox,
  handleChangeInput,
  upateUserName,
  persistor,
} from './store'

const theme = createMuiTheme({})

const Gists = () => {
  const dispatch = useDispatch()

  const gists = useSelector((state) => state.gistsReducer.gists)

  useEffect(() => {
    dispatch(getAllGists())
  }, [dispatch])

  return (
    <div>
      <ul>
        {gists.map((gist, index) => (
          <li key={index}>{gist.description || ''}</li>
        ))}
      </ul>
    </div>
  )
}

const Profile = () => {
  const { name, value, isToggle } = useSelector((state) => state.profileReducer)
  const dispatch = useDispatch()

  return (
    <div>
      {isToggle && <h1>profile {name}</h1>}
      <input
        type="checkbox"
        checked={isToggle}
        onChange={() => dispatch(toggleCheckBox())}
      />
      <br />
      <input
        value={value}
        onChange={(e) => dispatch(handleChangeInput(e.currentTarget.value))}
      />
      <button onClick={() => dispatch(upateUserName())}>update name</button>
    </div>
  )
}

ReactDOM.render(
  <BrowserRouter>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <ThemeProvider theme={theme}>
          <Switch>
            <Route path="/chat" component={(props) => <Chat {...props} />} />
            <Route path="/gists" component={(props) => <Gists {...props} />} />
            <Route
              path="/profile"
              component={(props) => <Profile {...props} />}
            />
            <Route path="*" component={() => <h1>404</h1>} />
          </Switch>
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </BrowserRouter>,
  document.getElementById('root')
)
