import React from 'react';
import { Flex, Image } from '@chakra-ui/react';
import { feature_project } from '../../assets/imports';

const Feature = ({ title, text, img = "",isFeature=false, onClick }) => (
  <Flex className="features-container__feature" onClick={onClick}>
    {isFeature &&
      <Image src={feature_project} className='featured-feature' />
    }
    {img &&
        <Flex className="features-container__feature-img">
            <Image src ={img} />
        </Flex>
    }
    <Flex className="features-container__feature-title" >   
      <h1>{title}</h1>
    </Flex>
    {text &&
    <div className="features-container_feature-text">
      <p>{text}</p>
    </div>
    }
  </Flex>
);

export default Feature;