import './Components/Main/Main';
import Main from './Components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Purchase from './Components/Purchase/Purchase';
import Algorithms from './Components/Algorithms/Algorithms';
import DataStructures from './Components/DataStructures/DataStructures';

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
        <Route path="/algorithms" exact={true}>
          <Algorithms/>
        </Route>
        <Route path="/dataStructures" exact={true}>
          <DataStructures/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
