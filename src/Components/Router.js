import React from 'react';
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom';
import Header from './Header';
import Movies from '../Routes/Movies';
import TV from '../Routes/TV';
import Search from '../Routes/Search';
import Detail from "../Routes/Detail"

const RouterContainer = () => (
    <Router>
        <Header />
        <Switch>
            <Route path="/" exact component={Movies} />
            <Route path="/tv" exact component={TV} />
            <Route path="/search" exact component={Search} />
            <Route path="/movie/:id" component={Detail} />
            <Route path="/show/:id" component={Detail} />
            <Redirect from="*" to="/" />
        </Switch>
    </Router>
)

export default RouterContainer;