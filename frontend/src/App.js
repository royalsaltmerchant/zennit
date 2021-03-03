import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Navigation from  './components/nav.js'
import About from './components/about.js'
import Sidebar from './components/sidebar.js'
import Register from './components/register.js'
import Login from './components/login.js'

import './main.css'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

function App() {
  return (
    <Router>
      <div className="main-body">
        <Navigation />
        <Container>
            <Row>
              <div className="col-md-8">
                <Switch>
                  <Route path="/about">
                    <About />
                  </Route>
                  <Route path="/register">
                    <Register />
                  </Route>
                  <Route path="/login">
                    <Login />
                  </Route>
                </Switch>
              </div>
              <Sidebar />
            </Row>
          </Container>
      </div>
    </Router>
  );
}

export default App;
