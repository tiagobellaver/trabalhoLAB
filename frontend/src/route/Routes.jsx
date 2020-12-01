import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import { history } from '../history';

import UserCreate from '../pages/user/UserCreate';
import User from '../pages/user/User';
import UserDetails from '../pages/user/UserDetails';
import UserAlter from '../pages/user/UserAlter';

import Login from '../pages/login/Login';

import Home from '../pages/home/Home';

import Cards from '../pages/cards/Cards';
import CardsDetail from '../pages/cards/CardDetail';
import CardCreate from '../pages/cards/CardCreate';
import CardAlter from '../pages/cards/CardAlter';

import Historic from '../pages/historic/Historic';
import HistoricDetail from '../pages/historic/HistoricDetails';

import Dispositivo from '../pages/dispositivo/Dispositivo';
import DispositivoDetail from '../pages/dispositivo/DispositivoDetail';
import DispositivoCreate from '../pages/dispositivo/DispositivoCreate';
import DispositivoAlter from '../pages/dispositivo/DispositivoAlter';

import About from '../pages/about/About';

import PrivateRoute from './PrivateRoute';

import PublicRoute from './PublicRoute';
import Logout from '../pages/login/Logout';

const Routes = () => (
    <BrowserRouter history={history}>
        <Switch>
            <PublicRoute exact path='/login' component={Login} />

            <PrivateRoute exact path='/' component={Home} />

            <PrivateRoute exact path='/logout' component={Logout} />

            <PrivateRoute exact path='/cartao' component={Cards} />
            <PrivateRoute exact path='/cartao/cadastrar' component={CardCreate} />
            <PrivateRoute exact path='/cartao/:id' component={CardsDetail} />
            <PrivateRoute exact path='/cartao/alterar/:id' component={CardAlter} />

            <PrivateRoute exact path='/historico' component={Historic} />
            <PrivateRoute exact path='/historico/:id' component={HistoricDetail} />
            
            <PrivateRoute exact path="/dispositivo" component={Dispositivo} />
            <PrivateRoute exact path="/dispositivo/cadastrar" component={DispositivoCreate} />
            <PrivateRoute exact path="/dispositivo/:id" component={DispositivoDetail} />
            <PrivateRoute exact path="/dispositivo/alterar/:id" component={DispositivoAlter} />
            
            <PrivateRoute exact path="/usuario" component={User} />
            <PrivateRoute exact path="/usuario/:id" component={UserDetails} />
            <PrivateRoute exact path="/usuario/alterar/:id" component={UserAlter} />
            <Route exact path='/novo-usuario' component={UserCreate} />
            <PrivateRoute exact path='/sobre' component={About} />
        </Switch>
    </BrowserRouter>
)

export default Routes;