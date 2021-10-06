import 'antd/dist/antd.css';
import { Route, Switch, Redirect } from 'react-router-dom'
import React, { useState } from 'react'
import Game from './Game';
import LogInPage from './Pages/LogInPage';
import { useHistory } from 'react-router';

export const AuthContext = React.createContext({
  token: '',
  isLoggedIn: false,
  login: (token) => { },
  logout: () => { }
});

function App() {
  const startValue = localStorage.getItem('token')
  const [token, setToken] = useState(startValue);
  const isLoggedIn = !!token;
  const history = useHistory();

  const loginHandler = async (token) => {
    setToken(token)
    localStorage.setItem('token', token);
    history.replace(`/`)
  }

  const logoutHandler = () => {
    setToken(null)
    localStorage.removeItem('token')
  }

  const ctxValue = {
    token: token,
    isLoggedIn: isLoggedIn,
    login: loginHandler,
    logout: logoutHandler
  }

  return (
    <React.Fragment>
      <AuthContext.Provider value={ctxValue}>
        <Switch>
          <Route path="/" exact>
            {!isLoggedIn && (<LogInPage />)}
            {isLoggedIn && (<Redirect to={`/play/1`} />)}
          </Route>

          <Route path="/play/:idUser">
            {isLoggedIn && (<Game />)}
          </Route>

        </Switch>
      </AuthContext.Provider >
    </React.Fragment>
  );
}

export default App;
