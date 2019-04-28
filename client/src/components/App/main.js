import React from 'react';
import { Route, Switch } from 'react-router-dom'
import CategoryPage from '../Category';
import StorePage from '../Store';


export function Main() {
    return (
      <Switch>
        <Route exact path="/" component={CategoryPage} />
        <Route exact path="/category" component={CategoryPage} />
        <Route path="/category/:type" component={StorePage} />
      </Switch>
    );
  }