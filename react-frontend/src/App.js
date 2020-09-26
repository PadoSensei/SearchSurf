import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './components/pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Corals from './components/pages/Corals';
import Pontal from './components/pages/Pontal';
import Tiririca from './components/pages/Tiririca';
import SaoJose from './components/pages/SaoJose';
import Havaizinho from './components/pages/Havaizinho';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pontal' component={Pontal} />
          <Route path='/corals' component={Corals} />
          <Route path='/havaizinho' component={Havaizinho} />
          <Route path='/tiririca' component={Tiririca} />
          <Route path='/saojose' component={SaoJose} />
        </Switch>
      </Router>
    </>
  );
}

export default App;