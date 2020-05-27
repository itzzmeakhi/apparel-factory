import React, { Component } from 'react';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './../src/components/Header/Header.component';
import AuthPage from './../src/pages/AuthPage/AuthPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { Route, Switch } from 'react-router-dom';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser : null
    }
  }

  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {
          this.setState({
            currentUser : {...snapshot.data()}
          })
        }, () => console.log(this.state.currentUser));
      } else {
        this.setState({currentUser : user})
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser = {this.state.currentUser} />
        <Switch>
          <Route path = "/shop" component = {ShopPage} />
          <Route path = "/auth" component = {AuthPage} />
          <Route path = "/" component = {HomePage} />
        </Switch>
      </div>
    );
  }
}

export default App;
