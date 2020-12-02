import React from 'react';
import { Route, Redirect } from 'react-router';

const PublicRoute = props => {
    const isLogged = localStorage.getItem('logged')
    if(isLogged || isLogged === "true"){
        return <Redirect to="/"/>
    }
    return <Route { ... props }/>
}


export default PublicRoute