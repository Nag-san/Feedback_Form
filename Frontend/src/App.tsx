import React from 'react';
import {Route,Routes} from 'react-router-dom';
import Home from './pages/Home';
import CreateFeedback from './pages/CreateFeedBack';


function App() {
  return (
    <Routes>
      <Route path='/' element = {<Home/>}/>
      <Route path='/CreateFeedback' element = {<CreateFeedback/>}/>
    </Routes>
  );
}

export default App;
