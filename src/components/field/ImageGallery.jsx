import { Flex, Image, Text } from '@chakra-ui/react';
import React from 'react';

const ImageGallery = ({imageL, imageR1, imageR2, text})=>{
    return (
        <Flex className="img-gallery">
            <Flex className="img-wrapper">
                <Flex className="left">
                    <Image src={imageL}/>
                </Flex>
                <Flex className="right">
                    <Image className='right_1' src={imageR1}/>
                    <Image className='right_2' src={imageR2}/>
                </Flex>
            </Flex>
            <Text className="img-footer">{text}</Text>
        </Flex>

    )
}

export default ImageGallery; 