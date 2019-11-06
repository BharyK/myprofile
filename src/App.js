import React from 'react';
import './App.css';  

import NavgationBar from './component/navBar';
import Home from './component/home';
import Profile from './component/profile';
import Skills from './component/skills';
import Quote from './component/quote';
import Work from './component/work';
import Contact from './component/contact';
import Footer from './component/footer';


function App() {
  return (
   
      <div>
          <NavgationBar/>
          <Home />
          <Profile />
          <Skills />
          <Quote />
          <Work/>
          <Contact/>
          <Footer/>  
        </div>
         
  );
}

export default App;
