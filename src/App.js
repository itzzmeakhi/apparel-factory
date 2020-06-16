import React, { useEffect } from 'react';
import { createStructuredSelector } from 'reselect';

import HomePage from './pages/HomePage/HomePage.component';
import ShopPage from './pages/ShopPage/ShopPage.component';
import Header from './../src/components/Header/Header.component';
import AuthPage from './../src/pages/AuthPage/AuthPage.component';
// import { auth, createUserProfileDocument, addCollectionsAndDocuments } from './firebase/firebase.utils';
// import { auth, createUserProfileDocument } from './firebase/firebase.utils';

import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
// import { setCurrentUser } from './redux/user/user.actions';
import { selectShopCollections } from './redux/shop/shop.selectors';

import './App.css';
import { selectCurrentUser } from './redux/user/user.selectors';
import CheckOutPage from './pages/CheckOutPage/CheckOutPage.component';
import { checkUserSession } from './redux/user/user.actions';


const App = ({checkUserSession, currentUser}) =>  {

  //unsubscribeAuth = null;

  useEffect(() =>  {
    // const { checkUserSession } = this.props;

    checkUserSession();
    // this.unsubscribeAuth = auth.onAuthStateChanged(async user => {
    //   if(user) {
    //     const userRef = await createUserProfileDocument(user);

    //     userRef.onSnapshot(snapshot => {
    //       // this.setState({
    //       //   currentUser : {...snapshot.data()}
    //       // })
    //       this.props.setLoggedInUser(snapshot.data());
    //     });
    //   } else {
    //     this.props.setLoggedInUser(user);
    //   }
    //   // addCollectionsAndDocuments('collections', this.props.collections.map(({title, items}) => ({title, items})));
    // })
  }, [checkUserSession]);

  // componentWillUnmount() {
  //   // this.unsubscribeAuth();
  // }

  
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route path = "/shop" component = {ShopPage} />
        <Route path = "/auth" render = {
          () => currentUser ? (<Redirect to = "/" />) : (<AuthPage />)
        } />
        <Route path = "/checkout" component = {CheckOutPage} />
        <Route path = "/" component = {HomePage} />
      </Switch>
    </div>
  );

}
  


// const mapStateToProps = state => {
//   return {
//     currentUser : state.user.currentUser
//   }
// }

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser,
  collections : selectShopCollections
})

const mapDispatchToProps = dispatch => {
  return {
    checkUserSession : () => dispatch(checkUserSession())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
