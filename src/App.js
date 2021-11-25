import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/Home';
import Footer from './components/Footer';
import Signin from './components/Signin';
import Watching from './components/Watching';
import Plan1 from './components/Plan1';
import Main from './components/Main';






function App() {
  return (
    <Router>
      <div className="app">
        <Switch>
        <Route path="/main">
          <Main />
          </Route>

        <Route path="/plan1">
          <Plan1 />
          </Route>

        <Route path="/watching">
          <Watching />
          </Route>

        <Route path="/signin">
          <Signin />
          </Route>


          <Route path="/">
            <Home />
            <Footer />
          </Route>

        </Switch>
      </div>
    </Router>
  );
}

export default App;
