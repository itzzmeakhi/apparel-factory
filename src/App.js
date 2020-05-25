import React from 'react';
import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './../src/components/Header/Header.component';

import { Route, Switch } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path = "/shop" component = {ShopPage} />
        <Route path = "/" component = {HomePage} />
      </Switch>
    </div>
  );
}

export default App;
