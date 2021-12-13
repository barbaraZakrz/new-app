import React from 'react';
import './App.css';
import  Header  from './components/header';
import Footer from './components/footer';

function OurText(){
  return <p>This is our text</p>
}

function App() {
  return (
    <div className="App">
    
    <Header info ="this is My message" myNumber="6" />
    <Header info ="this is My message" myNumber="4" />
    <p>Main content</p>
    <Footer trademark="page by me"/>
    </div>
  );
}

export default App;
