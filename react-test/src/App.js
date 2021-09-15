import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
// import Home from './components/Home';
// import User from './components/User';
// import About from './components/About';
import {Suspense, lazy} from 'react';

let LazyHome = lazy(() => import('./components/Home'));
let LazyAbout = lazy(() => import('./components/About'));
let LazyUser = lazy(()=> import('./components/User'));

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Suspense fallback={<div>loading</div>}>
          <Switch>
            <Route path="/about">
              <LazyAbout />
            </Route>
            <Route path="/users">
              <LazyUser />
            </Route>
            <Route path="/">
              <LazyHome />
            </Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
