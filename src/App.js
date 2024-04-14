import {React, useState} from 'react'
// import './App.css';
import './HomeStyle.css'
// import Product from './product';
import Header from './header';
// import Footer from './Footer';
 
// import RestuarantsAll from './KFCRestaurants/RestuarantsAll';
 import { Routes, Route } from 'react-router-dom';
  // import { KFCBranches } from './KFCRestaurants';
import Home from './Home';
import SignInn from './SignIn';
// import Hommee from './Hommee';

function App() {
  
  // function to get state of cart button
  const [show, setShow] = useState(false);
  const getDta =  (a) => {
    setShow(a);
  }
  return (
    <div className="App" >
      {/* pass down function to header to extract button state, set state show then pass down value to product */}
      <Header showing={getDta}/>

      <Routes>
        {/* <Route path='/' element={<Hommee />} /> */}
        <Route path='/' element={<Home />} />
        {/* <Route path='/restuaranstall' element={<RestuarantsAll />} /> */}
        <Route path='/signin' element={<SignInn />} />
      </Routes> 
      
    </div>
  );
}

export default App;
