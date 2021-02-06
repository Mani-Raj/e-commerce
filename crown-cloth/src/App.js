
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
  constructor() {
    super();
    this.state = {
      currentUser: null
    }
  }

unsubscribeFromAuth = null;

componentDidMount() {

  this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
    if (userAuth) {
      const userRef = await createUserProfileDocument(userAuth);

      userRef.onSnapshot(snapShot => {
        this.setState({
          currentUser: {
            id: snapShot.id,
            ...snapShot.data()
          }
        });
      });
      console.log(this.props, userAuth, 'app')
    }
    console.log(this.props, userAuth, 'app-outauth')
    this.setState({currentUser: userAuth});
  });
}

componentWillUnmount() {
  this.unsubscribeFromAuth();
}

  render () {
    return (
      <div>
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' component={HomePage} />        
          <Route exact path='/shop' component ={ShopPage} />
          <Route exat path='/signin' component={SignInAndSignUp} />
        </Switch>
      </div>
    );
  }
}



// const mapDispatchToProps = dispatch => ({
//   setCurrentUser: user => {
//     console.log(user, 'mapDispatchToProps')
//       return dispatch(setCurrentUser(user))
//     }
// })

// export default connect(null, mapDispatchToProps)(App);
 

export default App;