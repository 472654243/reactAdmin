import React from 'react'
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom'
import App from './App'
import Admin from './admin'
import Buttons from './pages/ui/buttons'

export default class DRouter extends React.Component { 
  render() { 
    return (
      <HashRouter>
        <App>
          <Route path="/admin" render={() =>
            <Admin>
              <Switch>
                <Route path='/ui/buttons' component={Buttons} />
              </Switch>
            </Admin>
          }/>
        </App>
      </HashRouter>
    )
  }
}