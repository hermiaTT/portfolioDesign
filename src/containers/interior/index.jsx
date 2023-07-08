import React from 'react';
import Feature from '../../components/feature/index.jsx';
import {Box, Flex, Grid, Heading, Text, Image, GridItem} from '@chakra-ui/react';
// import { useTranslation } from 'react-i18next';
import {rocket, power, stack, aboutUsBG,interior} from '../../assets/imports.js';
const Interior = () => {
  // const {t, i18n } = useTranslation();
  return (
    <div  id="interior">
      <Flex className='index_margin-section' bg= '#FFDF85' />
      <Flex className='index_container section__margin interior'>
        <Heading as="h3" className='index_title wrapper'>INTERIOR SPACE</Heading>
        <Grid  className='index_content-wrap'
          templateRows='repeat(2, 1fr)'
          templateColumns='repeat(4, 1fr)'
          >
            <GridItem className='wrapper' rowSpan={2} colSpan={2} >
              <Image className=' wrapper left' src={interior} width="100%"/>
            </GridItem>
            <GridItem className='wrapper'  colSpan={1} bg='#6D6F6E'>
              <Feature className=' wrapper'
                hidden = {true} 
                title= 'STAGING'/>
            </GridItem>
            <GridItem className='wrapper'  colSpan={1} bg='#FBB901'>
              <Feature className=' wrapper'
                hidden = {true} 
                title= 'RESIDENTIAL'/>
            </GridItem>
            <GridItem className='wrapper'  colSpan={1} >
              {/* <div class="triangle-left"></div> */}
              <div class="wrapper triangle-right"></div>
            </GridItem>
            <GridItem className='wrapper'  colSpan={1} bg='#362D25'>
              <Feature className=' wrapper'
                hidden = {true} 
                title= 'RETAIL'/>
            </GridItem>
        </Grid>
      </Flex>
      

    </div>
  )
}

export default Interior