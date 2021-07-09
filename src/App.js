import './Components/Main/Main';
import Main from './Components/Main/Main';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Purchase from './Components/Purchase/Purchase';
import Algorithms from './Components/Algorithms/Algorithms';
import DataStructures from './Components/DataStructures/DataStructures';
import AppBar from './Components/AppBar/AppBar';
import DesignPatterns from './Components/DesignPatterns/DesignPatterns'
import Git from './Components/Git/Git';
import RegularExpression from './Components/RegularExpression/RegularExpression';
import CryptoGraphy from './Components/cryptoGraphy/CryptoGraphy';

function App() {
  return (
    <Router>
      <AppBar />
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
        <Route path="/designPatterns" exact={true}>
          <DesignPatterns/>
        </Route>
        <Route path="/git" exact={true}>
          <Git/>
        </Route>
        <Route path="/regularExpression" exact={true}>
          <RegularExpression/>
        </Route>
        <Route path="/cryptoGraphy">
          <CryptoGraphy/>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
