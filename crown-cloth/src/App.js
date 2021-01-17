
import './App.css';
import HomePage from './page/homepage/homepage.component';
import { Route, Switch, Link } from 'react-router-dom';

const Hats = (props) => { 
  console.log('hats called ', props)
  return (
  <div>
    <h1>HATS</h1>
  </div>
)
  }

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />        
        <Route exact path='/shop/hats' component = {Hats} />
      </Switch>
    </div>
  );
}

export default App;
