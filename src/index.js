import { ThemeProvider, createMuiTheme } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import { MessageField, ChatList, MessageProvider } from './components'

const App = () => {
  return (
    <div>
      <Link to="/chat/room1">room1</Link>
      <Link to="/chat/room2">room2</Link>
      <Switch>
        <Route path={['/chat/:roomId']}>
          {(params) => (
            <MessageProvider {...params}>
              {([state, actions]) => (
                <div style={{ display: 'flex' }}>
                  {console.log(state, actions)}
                  <ChatList />
                  <hr />
                  <MessageField />
                </div>
              )}
            </MessageProvider>
          )}
        </Route>
      </Switch>
    </div>
  )
}

const theme = createMuiTheme({})

ReactDOM.render(
  <BrowserRouter>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.getElementById('root')
)
