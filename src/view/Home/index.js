import React from 'react';
import { useState } from "react";
import { useNavigate } from "react-router";

import {Box, Flex, Grid, Heading, Text, Image, GridItem, Button} from '@chakra-ui/react';

import {project_container, sun, flowers} from '../../assets/imports.js';
import {work1, work2, work3, work4, work5, work6, work7, work8} from '../../assets/imports';

import Headers from '../../components/header';
import Feature from '../../components/feature/index.jsx';
import Footer from '../../components/footer/Footer.jsx';



// import '../../App.css';
const Home = (props) => {
  const navigate = useNavigate();
  const works=[
    {
      img: work1,
      title: "VERZE.",
      text: "UI/UX Design",
      isFeature: true
    },
    {
      img: work2,
      title: "VERZE.",
      text: "UI/UX Design",
      isFeature: true
    },
    {
      img: work3,
      title: "VERZE.",
      text: "UI/UX Design",
      isFeature: false
    },
    {
      img: work4,
      title: "VERZE.",
      text: "UI/UX Design",
      isFeature: false
    },
    {
      img: work5,
      title: "VERZE.",
      text: "UI/UX Design",
      isFeature: false
    },
    {
      img: work6,
      title: "VERZE.",
      text: "UI/UX Design",
      isFeature: false
    },
    {
      img: work7,
      title: "VERZE.",
      text: "UI/UX Design",
      isFeature: false
    },
    {
      img: work8,
      title: "VERZE.",
      text: "UI/UX Design",
      isFeature: false
    },
  ]
  const navTo=(id)=>{
    let path = '/project/'+id;
    navigate(path);
  }

  return (
    <div className='App-Content'>
    <Headers />
    <Flex className='index_margin-section' bg= '#F8F8F8' />
    <div  id="project">
      <Flex className='project-container'>
        <div className='project-wrapper'>
          <div className='title'>I plant ideas and let it thrive ! </div>
          <div className='project-content'>
            <div className='project-top'>
              <Image className='frame' src={project_container}/>
              <Image className='sun' src={sun} />
              <Image className='flowers' src={flowers}/> 
            </div>
            <div className='project-bot'></div>
          </div>
        </div>
        <Flex className='description'>
          <p>I believe that establishing a strong concept is primary for clients, and my expertise lies in understanding their unique characteristics and translating them into successful visual factors. </p>
        </Flex>
        <Button className='btn'>VIEW PROJECT</Button>
      </Flex>
      <Flex className='index_margin-section' bg= '#F8F8F8' />
    </div>
    <div id="work"> 
      <Flex className='works_container' bg = "#FFFFFF" >
        <Flex className='works_title'>
          <Heading as='h2'>Selected works.</Heading>
        </Flex>
        <Grid className="index_content-wrap" templateRows='repeat(3 1fr)' templateColumns='repeat(3, 1fr)' gap ={4}>
          {
            works.map((work,index)=>{
              return (
                <GridItem className={index+' work_item'}  colSpan={1} >
                  <Feature  className='wrapper'
                            title={work.title}
                            img ={work.img}
                            text ={work.text}
                            isFeature = {work.isFeature}
                            onClick={()=>{navTo(index+1)}}/>
                </GridItem>

              )
            })
          }
        
        </Grid>
      </Flex>
      <Flex className='index_margin-section' bg= '#FFFFFF' />
    </div>
    <Footer />
    </div>
  )
}

export default Home;