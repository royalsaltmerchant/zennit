import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from  './components/nav.js'
import About from './components/about.js'
import Sidebar from './components/sidebar.js'
import Register from './components/register.js'
import './main.css'

function App() {
  return (
    <div className="main-body">
      <Router>
        <Nav />
        <main className="container" role="main">
          <div className="row">
            <div className="col-md-8">
              <Switch>
                <Route path="/about">
                  <About />
                </Route>
                <Route path="/register">
                  <Register />
                </Route>
              </Switch>
            </div>
            <Sidebar />
          </div>
        </main>
      </Router>
    </div>
  );
}

export default App;
