import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import Login from '../pages/login/Login';
import Home from '../pages/home/Home';
import Cards from '../pages/cards/Cards';
import CardsDetail from '../pages/cards/CardDetail';
import Historic from '../pages/historic/Historic';
import HistoricDetail from '../pages/historic/HistoricDetails';
import UserCreate from '../pages/user/CardCreate';
import UserAlter from '../pages/user/CardAlter';
import About from '../pages/about/About';

export default props =>
    <BrowserRouter>
        <Switch>
            <Route exact path='/login' component={Login} />
            <Route exact path='/home' component={Home} />
            <Route exact path='/cartoes' component={Cards} />
            <Route exact path='/cartao-detalhe' component={CardsDetail} />
            <Route exact path='/historico' component={Historic} />
            <Route exact path='/historico-detalhe' component={HistoricDetail} />
            <Route exact path='/cadastrar-cartao' component={UserCreate} />
            <Route exact path='/alterar-cartao' component={UserAlter} />
            <Route exact path='/sobre' component={About} />
        </Switch>
    </BrowserRouter>
