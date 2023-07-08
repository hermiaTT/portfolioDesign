import React from 'react'
import { Flex, Grid, Heading, GridItem, Image } from '@chakra-ui/react';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { digital } from '../../assets/imports';
import Feature from '../../components/feature';

const Digital = () => {
  
  return (
    <div id ="digital">
      <Flex className='index_margin-section' bg= '#FF9B9B' />
      <Flex className='index_container section__margin digital' >
      <Heading as="h3" className='index_title wrapper' >DIGITAL</Heading>

      <Grid className="index_content-wrap"  
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(4, 1fr)' >
            <GridItem className=' wrapper' colSpan={2} rowSpan={2} bg='#075197'>
                <Image src ={digital} width = "100%"/>
            </GridItem>
            <GridItem className=' wrapper' colSpan={1} bg='#7E7E7E'>
              <Feature className=' wrapper' hidden = {true} title= 'UIUX'/>   
            </GridItem>
            <GridItem className=' wrapper' colSpan={1} >
              <Feature className=' wrapper' hidden = {true} title= 'WEBSITE'/>
            </GridItem>
            <GridItem className=' wrapper' colSpan={1} bg = '#CD9FBB' >
              <div className='index_content-container'>
                <div className='square'/>
              </div>
            </GridItem>
            <GridItem className=' wrapper' colSpan={1} bg='#9F88BB'>
              <Feature className=' wrapper' hidden = {true} title= 'MOBILE'/>  
            </GridItem>
 
        </Grid>
    </Flex>
  </div>
  )
}

export default Digital