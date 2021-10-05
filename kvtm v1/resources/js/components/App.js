import 'antd/dist/antd.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import React from 'react'
import Game from './Game';
import LogInPage from './Pages/LogInPage';

function App() {
  return (
    <React.Fragment>
      <Switch>
        <Route path="/" exact>
          <LogInPage />
        </Route>
        <Route path="/play/:idUser">
          <Game />
        </Route>
      </Switch>
    </React.Fragment>
  );
}

export default App;
