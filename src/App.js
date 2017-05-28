import React, { Component } from 'react';
import './App.css';
import Body from './body/Body';
import Header from './header/Header';
import Footer from './footer/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;