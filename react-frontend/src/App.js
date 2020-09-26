import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Corals from './components/pages/Corals';
import Pontal from './components/pages/Pontal';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pontal' component={Pontal} />
          <Route path='/corals' component={Corals} />
        </Switch>
      </Router>
    </>
  );
}

export default App;