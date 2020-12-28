import React from 'react';
import Home from './components/home';
import './css/index.css';
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CartPage from './components/cart-page';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/components/cart-page.js" component={CartPage} />
        </Switch>
      </Router>

    </div>
  );
}

export default App;
