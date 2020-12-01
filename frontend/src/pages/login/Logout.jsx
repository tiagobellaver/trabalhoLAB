import React from 'react';
import { Redirect } from 'react-router';

const Logout = () => {

    localStorage.clear();
    return <Redirect to="/login"/>
}
export default Logout