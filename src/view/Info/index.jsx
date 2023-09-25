import { Flex, Grid, GridItem, Heading, Image, Text } from '@chakra-ui/react';
import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router";
import { info1, info2, info3, info4, info5, info6, info7, info8, info9 } from '../../assets/imports';

const Info = ({})=>{
    const imgs = [info1, info2, info3, info4, info5, info6, info7, info8, info9 ]
    return(
        <Flex className='info-wrapper'>
            <Flex className='info-header'>
                <Heading as ='h2'>INFO</Heading>
            </Flex>
            <Flex className='info-content-container'>
                <Text>It’s all about <br/>Nature. Life. and the little ones.</Text>
                <Grid className='info-grid-container'templateRows='repeat(3, 1fr)' templateColumns='repeat(3, 1fr)'>
                    {
                        imgs.map((img, index) =>{
                            return(
                                <GridItem className='info-grid' >
                                    <Image src={img}/>
                                </GridItem>
                            )
                    })}     
                </Grid>
                <Flex className='info-content-des'>
                    <Text>darrenxyp@gmail.com<br/>604-499-9069</Text>
                    <Text>The Great Vancouver<br/>Burnay</Text>
                </Flex>
            </Flex>
            <div className="works_footer-foot"/>
        </Flex>
    )
}

export default Info;