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
        <p>
        <button className="nav_link-item logo btn btn-success"
                  onClick={HomePage}>Darren Xu
          </button>
          </p>
        <div className='navbar-links_container'>
          <Menu/>
        </div>
</div>
    </Flex>
  )
}

export default Navbar;