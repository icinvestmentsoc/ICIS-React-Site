import Nav from './components/nav'
import { Footer } from './components/footer';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './pages/home'
import ImpactInvesting from './pages/impact_investing';
import Team from './pages/team';
import Sec from './pages/sec';
import Partners from './pages/partners';
import Events from './pages/events';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
          <Route path="/impactinvesting">
            <ImpactInvesting />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/sec">
            <Sec />
          </Route>
          <Route path="/partners">
            <Partners />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
