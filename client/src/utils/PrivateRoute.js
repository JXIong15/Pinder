import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import auth from './auth';

export const PrivateRoute = ({ component: Component, ...rest }) => {
  console.log("auth", auth.isAuthenticated);
  return (
    <Route
      {...rest}
      render={props =>
        auth ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
