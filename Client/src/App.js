import React from 'react';
import { Router, Route, Switch, Redirect } from 'react-router-dom';
import { history } from './helpers';
import { LoginPage } from './components/LoginPage';
import { SignupPage } from './components/SignupPage';
import { MainPage } from './components/MainPage';
import { PrivateRoute } from './components/auth/PrivateRoute';
import ErrorBoundary from './components/error_handling/ErrorBoundary';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import 'react-redux-toastr/lib/css/react-redux-toastr.min.css'
import "bootstrap/dist/css/bootstrap.css";
import './App.css'

function App() {
  global.RG ={currentUser: sessionStorage.user && JSON.parse(sessionStorage.user)}
  console.log('11111 global.', global.RG.currentUser)
  return (
    <ErrorBoundary>
      <div className="col-md-12">
        <Router history={history}>
          <Switch>
            <Route exact path="/" render={(props) => (
              global.RG.currentUser ?
                <Redirect to={`/dashboard`} /> : <Redirect to='/login' />

            )} />
            <Route exact path="/login" render={(props) => (
              global.RG.currentUser ?
                <Redirect to={`/dashboard`} /> : <LoginPage {...props} />

            )} />
            <Route exact path="/signup" render={(props) => (
              global.RG.currentUser ?
                <Redirect to={`/dashboard`} /> : <SignupPage {...props} />

            )} />
            <PrivateRoute exact path="/dashboard" component={MainPage} />
          </Switch>
        </Router>
      </div>
    </ErrorBoundary>
  );
}

export default App;