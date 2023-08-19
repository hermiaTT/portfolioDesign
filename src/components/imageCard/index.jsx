import { Flex, Image, Text } from "@chakra-ui/react";
import React from "react";

const ImageCard = ({img, describe="", style, className=""})=>{
    return (
        <Flex style={style} className={className+ " img_card-container"}>
            <Image src={img}/>
            {describe&&
            
                <Flex className="img-description">
                    <Text>{describe}</Text>
                </Flex>
            }
        </Flex>
    )
}

export default ImageCard;