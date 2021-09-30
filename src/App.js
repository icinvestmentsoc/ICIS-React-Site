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
import Partners from './pages/partners';
import SEC from './pages/sec';
import QTCapital from './pages/qtcapital';
import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        <Switch>
        <Route path="/qtcapital">
            <QTCapital/>
          </Route>
        <Route path="/sec">
            <SEC/>
          </Route>
          <Route path="/impactinvesting">
            <ImpactInvesting />
          </Route>
          <Route path="/team">
            <Team />
          </Route>
          <Route path="/partners">
            <Partners />
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
