import React, { useContext, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './website/Home/Home';
import About from './website/About/About';
import Products from './website/Products/Products';
import Locations from './website/Locations/Locations';
import Contact from './website/Contact/Contact';
import { StoreContext } from './context/StoreContext';

function App() {
  const { state } = useContext(StoreContext);
  // const { state, dispatch, actions } = useContext(StoreContext);

  useEffect(() => {
    // actions.login();
  }, []);

  return (
    <Router>
      <div>
        <Navbar isAuth={state.isAuth} />
        <Route exact path="/" component={Home} />
        <Route path="/products" component={Products} />
        <Route path="/locations" component={Locations} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </div>
    </Router>
  );
}

export default App;
