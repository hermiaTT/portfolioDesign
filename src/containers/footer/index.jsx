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
    <div className='footer_bar' id = 'footer_bar'>
      <ul>
        <li>NEW IDEAS</li>
        <li>NEW LIFE</li>
        <li>NEW IDEAS</li>
        <li>NEW LIFE</li>
        <li>NEW IDEAS</li>
        <li>NEW LIFE</li>
        <li>NEW IDEAS</li>
        <li>NEW LIFE</li>
        <li>NEW IDEAS</li>
        <li>NEW LIFE</li>
        <li>NEW IDEAS</li>
        <li>NEW LIFE</li>
      </ul>
    </div>
    <Flex className= 'footer_contact' color='#ffffff'>
      <Center className='footer_contact-item' >
        <Text>DARRENXYP@GMAIL.COM</Text>
      </Center>
      <Center className='footer_contact-item' >
        <Text>WECHAT: XYP962464</Text>
      </Center>
      <Center className='footer_contact-item'>
        <Text>DARRENXYP@GMAIL.COM</Text>
      </Center>
      <Center className='footer_contact-item' >
        <Text>WECHAT: XYP962464</Text>
      </Center>

</Flex>

</Flex>
  
);

export default Footer;