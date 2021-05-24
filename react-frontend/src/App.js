import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import Pontal from './pages/Pontal';
import Tiririca from './/pages/Tiririca';
import Itacarezinho from './pages/Itacarezinho'
import Havaizinho from './pages/Havaizinho';
import Jeribucacu from './pages/Jeribucacu';
import Ribeira from './pages/Ribeira';
import Footer from './components/Footer';


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
        <Footer />
      </Router>
    </>
  );
}

export default App;