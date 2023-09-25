import {React} from 'react';
import { useRef, useEffect } from "react";
import { Route, Routes} from "react-router-dom";
import { Divider } from '@chakra-ui/react';
// import './App.css';
import ErrorBoundary from './ErrorBoundary';
import Home from './view/Home';
import Navbar from './components/navbar';

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Project2 from './view/Works/project2';
import {useNavigate } from 'react-router-dom'; 
import Project3 from './view/Works/project3';
import Project6 from './view/Works/project6';
import Project1 from './view/Works/project1';
import Project4 from './view/Works/project4';
import Project7 from './view/Works/project7';
import Project8 from './view/Works/project8';
import Project5 from './view/Works/project5';
import Info from './view/Info';

const animateFrom = (elem,x,y) => {
  elem.style.transform = "translate(" + x + "px, " + y + "px)";
  elem.style.opacity = "0";
  gsap.fromTo(elem, {x: x, y: y, autoAlpha: 0}, {
    duration: 1.25, 
    x: 0,
    y: 0, 
    autoAlpha: 1, 
    ease: "expo", 
    overwrite: "auto"
  });
}

const hide=(elem)=> {
  gsap.set(elem, {autoAlpha: 0});
}

const AppWrapper = (props) => {

  const navigate = useNavigate();
  
  gsap.registerPlugin(ScrollTrigger);
  const ref = useRef(null);
  useEffect(() => {
    // const element = ref.current;
    gsap.utils.toArray(".wrapper").forEach((elem, index) => {

        hide(elem);
        const [x, y] = (index % 2) ? [-100,0] : [100, 0];
        ScrollTrigger.create({
          trigger: elem,
          onEnter: function() { animateFrom(elem,x,y) }, 
          onEnterBack: function() { animateFrom(elem, x,y) },
          onLeave: function() { hide(elem) } // assure that the element is hidden when scrolled into view
        });  
    });

  }, []);
  return (
    // <React.Fragment>
    <div className='App' ref={ref} >
        <div className='gradient__bg'>
          <Navbar/ >
        </div>
        <ErrorBoundary>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/project/1' element={<Project1/>}/>
            <Route path='/project/2' element={<Project2/>}/>
            <Route path='/project/3' element={<Project3/>}/>
            <Route path='/project/4' element={<Project4/>}/>
            <Route path='/project/5' element={<Project5/>}/>
            <Route path='/project/6' element={<Project6/>}/>
            <Route path='/project/7' element={<Project7/>}/>
            <Route path='/project/8' element={<Project8/>}/>
            <Route path='/info' element={<Info/>}/>
          </Routes>
        </ErrorBoundary>
        {/* <Divider mt="24px"/> */}
      
    </div>
    // </React.Fragment>
  )
}

export default AppWrapper;
