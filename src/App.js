import React from 'react';
import './App.css';
import  Header  from './components/header';
import Footer from './components/footer';

function createAlert(){
  alert('hello');
}

function OurText(){
  return <p>This is our text</p>
}

function App() {
  return (
    <div className="App">
    
    <Header info ="this is My message"  />
    
    <p>Main content</p>
    <Footer trademark="page by me"
      myalert = {createAlert}/>
    </div>
  );
}

export default App;
