import React from 'react'
import { Text, Flex, Center, GridItem } from '@chakra-ui/react'
// import Logo from './logo'
import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'


const Footer = () => (
  <Flex as="footer" className='ws_footer'>
    <div className='footer_bar' id = 'footer_bar'/>    
    <div className= 'footer_contact' color='#ffffff'/>
  </Flex>
  
);

export default Footer;