import './Components/Main/Main';
import Main from './Components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Purchase from './Components/Purchase/Purchase';

function App() {
  return (
    <Router>      
      <Switch>
        <Route path="/" exact={true}>
            <Main />
        </Route>
        <Route path="/purchase" exact={true}>
          <Purchase />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
