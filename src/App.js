import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import { Home } from './Components/Home.js';
import { useState, useEffect } from 'react';
import { Bio } from './Components/Bio/Bio.js';

function App() {

  const [showBio, setShowBio] = useState(false);

  const handleClick = () => {
    setShowBio(prev => !prev);
    console.log(showBio);
  }

  return(

    <Router>
      <Home showBio={showBio} onclick={handleClick}/>
      <Route path='/bio'>
        <Bio />
      </Route>
    </Router>
  )
}

export default App;
