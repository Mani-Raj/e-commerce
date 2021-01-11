
import './App.css';
import HomePage from './page/homepage/homepage.component';
import { Route, Switch } from 'react-router-dom';

const Has = () => (
  <h1>Maniraj</h1>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/mani' component={Has} />
      </Switch>
    </div>
  );
}

export default App;
