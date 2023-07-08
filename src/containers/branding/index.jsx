import React from 'react'
import { brand, brand2} from '../../assets/imports';
import Feature from '../../components/feature/index.jsx';
import { Box, Grid, Image, Flex, Heading, Text, GridItem } from '@chakra-ui/react';



const Branding = () => {
  return (
    <div id="team">
      <Flex className='index_margin-section' bg= '#2E8FEB' />
      <Flex className='index_container section__margin branding' >

        <Heading as="h3" className='index_title wrapper ' >BRANDING</Heading>
        <Grid className="index_content-wrap"  
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(4, 1fr)'>
            <GridItem className='wrapper'  colSpan={1} bg='#075197'>
              <Feature className='wrapper'
                hidden = {true} 
                title= 'IDENTITY'/>
            </GridItem>
            <GridItem className='wrapper'  colSpan={1} bg='#A7A7A7'>
            <div className='index_content-container wrapper'>
              <div className='circle'/>
            </div>
            </GridItem>
            <GridItem className='wrapper' colSpan={2}  rowSpan={2} bg = '#C1C0BB'>
              <Image  className = 'wrapper' src={brand} width="100%"/>
            </GridItem>
            <GridItem colSpan={1} bg = '#A7A7A7' >
            
            <Feature className=' wrapper'
                hidden = {true} 
                title= 'CONCEPT'/>
            </GridItem>
            <GridItem className='wrapper' colSpan={1}>        
              <Image src={brand2} width="100%"/>
            </GridItem>
 
        </Grid>
    </Flex>
  </div>
  )
}

export default Branding