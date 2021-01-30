
import './App.css';
import HomePage from './page/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';
import ShopPage from "./page/shop/shop.component.jsx";
import Header from './components/header/header.component.jsx';

function App() {
  return (
    <div>
      <Header/>
      <Switch>
        <Route exact path='/' component={HomePage} />        
        <Route exact path='/shop' component ={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
