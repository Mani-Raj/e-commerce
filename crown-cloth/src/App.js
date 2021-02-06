
import './App.css';
import React from 'react';
import HomePage from './page/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from "./page/shop/shop.component.jsx";
import Header from './components/header/header.component.jsx';
import SignInAndSignUp from './page/sign-in-and-sign-up/sign-in-and-sign-up.component';
import {auth, createUserProfileDocument} from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.action';

class App extends React.Component {

unsubscribeFromAuth = null;

componentDidMount() {

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        console.log(snapShot, 'app did mount')
        this.props.setCurrentUser1({
            id: snapShot.id,
            ...snapShot.data()
        });
      });
    }
    this.props.setCurrentUser1(userAuth);
  });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render () {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />        
          <Route exact path='/shop' component ={ShopPage} />
          <Route exat path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  setCurrentUser1: user => 
    dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(App);