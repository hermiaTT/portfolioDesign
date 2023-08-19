import React, {useEffect, useState} from 'react';
import ImageSlider from '../../components/field/ImageSlider';
import { useDispatch, useSelector } from 'react-redux';
import { brand, works_interior, interior1_1} from '../../assets/imports';
import { Flex } from '@chakra-ui/react';
import Header from '../../components/field/Header';
import Divider from '../../components/field/Divider';
import ContentTab from '../../components/contentTab/ContentTab';
import { useLocation } from 'react-router';

// import '../../App.css';
const BrandPage = (props) => {
  const dispatch = useDispatch();
  
  dispatch({type:"GET_BRANDING"});

  const state = useSelector(state=>state.BrandingPage);
  const imageSlider = state.imageSlider;
  const contentResource = state.content;
  const divider = state.divider;
  return (
    <Flex className='interior1-1 wrapper'>
      <Header bg='#E1484C' title="Branding" path ='/works'/>
      <ImageSlider bg='#A0B461' slides={imageSlider} />
      <Divider resource={divider}/>
      <ContentTab resource={contentResource} bg ='#FFC420'/>
    </Flex>
  )
}

export default BrandPage;