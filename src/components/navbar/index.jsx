import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Flex, Heading} from '@chakra-ui/react';
import {useNavigate } from 'react-router-dom'; 
//BEN -> Block Element Modifier

const Navbar = (props) => {
  const navigate = useNavigate();
  const HomePage = () => {
    navigate("/")
  }
  const worksPage = () => {
    navigate("/works")
  }
  const InfoPage = () => {
    navigate("/info")
  }
  
  const Menu = ()=>(
    
    <>
      <p> 
        <button className="nav_link-item btn btn-success"
                onClick={HomePage}>Home
        </button>
      </p>
      <p> 
        <button className="nav_link-item btn btn-success"
                onClick={worksPage}>Works
        </button>
      </p>
      <p> 
        <button className="nav_link-item btn btn-success"
                onClick={InfoPage}>Info
        </button>
      </p>
    </>
  )
  

  return (
    <Flex className='navbar'>
      <div className = 'navbar-links'>
        <Heading as="h3" className='navbar-links_logo'>
          Darren Xu
        </Heading>
        <div className='navbar-links_container'>
          <Menu/>
        </div>
      </div>
      {/* <div className='navbar-menu'>
        {toggleMenu ? 
          <RiCloseLine color="#fff" size = {27} onClick={()=>setToggleMenu(false)} />:
          <RiMenu3Line color="#fff" size = {27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu &&(
          <div className='navbar-menu_container scale-up-center'>
            <div className='navbar-menu_container-links'>
              <Menu/>
            </div>
            <div className='navbar-menu_container-links-sign'>
              <p>Sign in</p>
              <Button title={"Sign Up"} ></Button>
            </div>
          </div>
        )}
      </div> */}
    </Flex>
  )
}

export default Navbar;