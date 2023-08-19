import React from 'react'
import { Text, Flex, Center, GridItem, Image } from '@chakra-ui/react'

import {
  FaFacebookF,
  FaTwitter,
  FaGoogle,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import { footer } from '../../assets/imports';


const Footer = () => (
  <Flex as="footer" className='footer'>
    <Image src={footer} />
  </Flex>
  
);

export default Footer;