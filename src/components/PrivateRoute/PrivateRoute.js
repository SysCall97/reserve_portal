import React from 'react';
import { Route } from 'react-router-dom';

const PrivateRoute = ({ children, ...rest }) => {
    const user = sessionStorage.getItem('user').json();
    return (
        <Route
            {...rest}
            render={({ location }) =>
                auth.user ? (
                    children
                ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
            }
        />
    );
};

export default PrivateRoute;