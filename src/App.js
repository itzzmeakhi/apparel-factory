import React, { Component } from 'react';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './../src/components/Header/Header.component';
import AuthPage from './../src/pages/AuthPage/AuthPage.component';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';


class App extends Component {

  unsubscribeAuth = null;

  componentDidMount() {
    this.unsubscribeAuth = auth.onAuthStateChanged(async user => {
      if(user) {
        const userRef = await createUserProfileDocument(user);

        userRef.onSnapshot(snapshot => {
          // this.setState({
          //   currentUser : {...snapshot.data()}
          // })
          this.props.setLoggedInUser(snapshot.data());
        });
      } else {
        this.props.setLoggedInUser(user);
      }
    })
  }

  componentWillUnmount() {
    this.unsubscribeAuth();
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route path = "/shop" component = {ShopPage} />
          <Route path = "/auth" component = {AuthPage} />
          <Route path = "/" component = {HomePage} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    setLoggedInUser : user => dispatch(setCurrentUser(user))
  }
}

export default connect(null, mapDispatchToProps)(App);
