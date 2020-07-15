import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import GlobalStyle from './styles/global';
import Home from './pages/Home';

export default function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />

      <Switch>
        <Route path="/" exat>
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
