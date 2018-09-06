import React from 'react';
import { hot } from 'react-hot-loader'

import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Link,
  Switch,
  withRouter,
} from 'react-router-dom'
import {
  rootRouters,
  routers,
} from '@/router/router'

class App extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            {
              rootRouters.map((route,index) => {
                return(
                  <Route 
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  component={route.component}/>
                )
              })
            }
          </Switch>
        </Router>
      </div>
    );
  }
}

export default hot(module)(App)
