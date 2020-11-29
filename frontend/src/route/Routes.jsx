import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { history } from '../history';


import Login from '../pages/login/Login';

import Home from '../pages/home/Home';

import Cards from '../pages/cards/Cards';
import CardsDetail from '../pages/cards/CardDetail';
import CardCreate from '../pages/cards/CardCreate';
import CardAlter from '../pages/cards/CardAlter';

import Historic from '../pages/historic/Historic';
import HistoricDetail from '../pages/historic/HistoricDetails';

import User from '../pages/user/User';
import UserDetail from '../pages/user/UserDetail';
import UserCreate from '../pages/user/UserCreate';
import UserAlter from '../pages/user/UserAlter';

import About from '../pages/about/About';

import PrivateRoute from './PrivateRoute';

const Routes = () => (
    <BrowserRouter history={history}>
        <Switch>
            <Route exact path='/login' component={Login} />

            <PrivateRoute exact path='/' component={Home} />
            
            <PrivateRoute exact path='/cartao' component={Cards} />
            <PrivateRoute exact path='/cartao/:id' component={CardsDetail} />
            <PrivateRoute exact path='/cartao/cadastrar' component={CardCreate} />
            <PrivateRoute exact path='/cartao/alterar/:id' component={CardAlter} />

            <PrivateRoute exact path='/historico' component={Historic} />
            <PrivateRoute exact path='/historico/:id' component={HistoricDetail} />
            
            <PrivateRoute exact path="/usuario" component={User} />
            <PrivateRoute exact path="/usuario/cadastrar" component={UserCreate} />
            <PrivateRoute exact path="/usuario/:id" component={UserDetail} />
            <PrivateRoute exact path="/usuario/alterar/:id" component={UserAlter} />
            
            <PrivateRoute exact path='/sobre' component={About} />
        </Switch>
    </BrowserRouter>
)

export default Routes;