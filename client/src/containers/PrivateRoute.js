import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import auth from '../utils/auth';

export const PrivateRoute = ({ component: Component, ...rest }) => {

  return (
    <Route
      {...rest}
      render={props =>
        auth.isAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
        )
      }
    />
  )
}
