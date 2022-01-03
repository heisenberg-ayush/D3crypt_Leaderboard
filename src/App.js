import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import LeaderBoard from './pages/LeaderBoard';
import MobileNavbar from "./pages/components/MobileNav/MobileNav";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path="/">
          <MobileNavbar />
          </Route>
          <Route exact path="/leaderboard">
            {/* <MobileNavbar /> */}
            <LeaderBoard/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
