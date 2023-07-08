import React, {useState} from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { Flex} from '@chakra-ui/react'
//BEN -> Block Element Modifier

const Menu = ()=>(
  <>
    <p><a href='#intro'>Home</a></p>
    <p><a href='#team'>Works</a></p>
    <p><a href='#contact'>Info</a></p>
  </>
)

const Navbar = (props) => {

  
  return (
    <Flex className='ws__navbar'>
      <div className = 'ws__navbar-links'>
        <div className='ws__navbar-links_logo'>
          <p><a href='#intro'>Darren Xu</a></p>
        </div>
        <div className='ws__navbar-links_container'>
          <Menu/>
        </div>
      </div>
      {/* <div className='ws__navbar-menu'>
        {toggleMenu ? 
          <RiCloseLine color="#fff" size = {27} onClick={()=>setToggleMenu(false)} />:
          <RiMenu3Line color="#fff" size = {27} onClick={()=>setToggleMenu(true)} />
        }
        {toggleMenu &&(
          <div className='ws__navbar-menu_container scale-up-center'>
            <div className='ws__navbar-menu_container-links'>
              <Menu/>
            </div>
            <div className='ws__navbar-menu_container-links-sign'>
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