import React from 'react'
import { graphic, graphic2} from '../../assets/imports';
import Feature from '../../components/feature/index.jsx';
import { Box, Grid, Image, Flex, Heading, Text, GridItem } from '@chakra-ui/react';



const Graphic = () => {
  return (
    <div id="team">
      <Flex className='index_margin-section' bg= '#68DBFF' />
      <Flex className='index_container section__margin graphic ' >
        <Heading as="h3" className='index_title wrapper' >GRAPHIC</Heading>
        <Grid className="index_content-wrap"  
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(4, 1fr)' >
            <GridItem className=' wrapper' colSpan={1} bg='#1DAFDD'>
              <Feature className=' wrapper' hidden = {true} title= 'CARD/MENU'/>
            </GridItem>
            <GridItem className=' wrapper' colSpan={1} bg='#6D6F6E'>
              <Feature className=' wrapper' hidden = {true} title= 'ILLUSTRATION'/>
            </GridItem>
            <GridItem className=' wrapper' colSpan={2}  rowSpan={2} bg = '#B8EEFF'>
              <Image  src={graphic} width="100%"/>
            </GridItem>
            <GridItem className=' wrapper' colSpan={1} bg = '#656565' >   
                <Feature className=' wrapper' hidden = {true} title= 'FLYERS'/>
            </GridItem>
            <GridItem className=' wrapper' colSpan={1}>        
              <Image  src={graphic2} width="100%"/>
            </GridItem>
 
        </Grid>
    </Flex>
  </div>
  )
}

export default Graphic