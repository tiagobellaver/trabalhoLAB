import React from 'react';
import { Switch, Route, Router } from 'react-router-dom';
import { history } from '../history';


import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import Cards from '../pages/cards/Cards';
import CardsDetail from '../pages/cards/CardDetail';
import Historic from '../pages/historic/Historic';
import HistoricDetail from '../pages/historic/HistoricDetails';
import UserCreate from '../pages/user/CardCreate';
import UserAlter from '../pages/user/CardAlter';
import About from '../pages/about/About';
import PrivateRoute from './PrivateRoute';

const Routes = () => (
    <Router history={history}>
        <Switch>
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/home' component={Home} />
            <PrivateRoute exact path='/cartoes' component={Cards} />
            <PrivateRoute exact path='/cartao-detalhe' component={CardsDetail} />
            <PrivateRoute exact path='/historico' component={Historic} />
            <PrivateRoute exact path='/historico-detalhe' component={HistoricDetail} />
            <PrivateRoute exact path='/cadastrar-cartao' component={UserCreate} />
            <PrivateRoute exact path='/alterar-cartao' component={UserAlter} />
            <PrivateRoute exact path='/sobre' component={About} />
        </Switch>
    </Router>
)

export default Routes;