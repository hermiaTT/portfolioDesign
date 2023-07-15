import React from 'react';
import {Flex, Grid,Heading, Image} from '@chakra-ui/react'
import { heading1_1, heading2_1, heading2_2, heading2_3_4, heading2_5, heading2_6, heading3_1, heading3_2, heading3_3, heading3_4, heading3_5, star } from '../../assets/imports';

const Header = () => {
  return (
    
    <Flex className = "header wrapper"
      height={['60vh', '60vh', '60vh', '70vh']}
    >
      <Flex className='header-content wrapper' paddingX={['1.5em', '1.5em', '1.5em', '15%']}>
        <div className='heading_content row_1'>
          <Image className='heading_star star1-1' src = {star} />
          <Image className = 'wrapper heading_word-wrap line_1' src ={heading1_1} />
          <Image className='heading_star star1-2' src = {star} />
          <Heading className='title' as="h1">I’M DARREN <br/>HOW R U</Heading>
        </div>
        <div className='heading_content row_2'>
          <Image className = 'wrapper heading_word-wrap' src = {heading2_1}/>
          <Image className='heading_star star2-1' src = {star} />
          <Image className = 'wrapper heading_word-wrap' src = {heading2_2}/>
          <Image className = 'wrapper heading_word-wrap' src = {heading2_3_4}/>
          <Image className = 'wrapper heading_word-wrap' src = {heading2_3_4}/>
          <Image className='heading_star star2-2' src = {star} />
          <Image className = 'wrapper heading_word-wrap' src = {heading2_5}/>
          <Image className = 'wrapper heading_word-wrap' style={{height:'68%'}} src = {heading2_6}/>
        </div>
        <div className='heading_content row_3'>
          <Image className = 'wrapper heading_word-wrap' src = {heading3_1}/>
          <Image className = 'wrapper heading_word-wrap' src = {heading3_2}/>
          <Image className = 'wrapper heading_word-wrap' src = {heading3_3}/>
          <Image className='heading_star star3-1' src = {star} />
          <Image className = 'wrapper heading_word-wrap' src = {heading3_4} paddingLeft={'80px'}/>
          <Image className = 'wrapper heading_word-wrap' src = {heading3_5}/>
          <Image className='heading_star star3-2' src = {star} />
        </div>
      </Flex>
    </Flex>
  )
}

export default Header