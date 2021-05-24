import React from 'react';
import Navbar from './components/Navbar';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Pontal from './pages/Pontal';
import Tiririca from './/pages/Tiririca';
import Itacarezinho from './pages/Itacarezinho'
import Havaizinho from './pages/Havaizinho';
import Jeribucacu from './pages/Jeribucacu';
import Ribeira from './pages/Ribeira';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/pontal' component={Pontal} />
          <Route path='/jeribucacu' component={Jeribucacu} />
          <Route path='/havaizinho' component={Havaizinho} />
          <Route path='/tiririca' component={Tiririca} />
          <Route path='/itacarezinho' component={Itacarezinho} />
          <Route path='/ribeira' component={Ribeira} />
        </Switch>
      </Router>
    </>
  );
}

export default App;