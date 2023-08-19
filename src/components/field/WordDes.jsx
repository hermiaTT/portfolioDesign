import { Flex, Heading } from "@chakra-ui/react";
import React from "react";
const WordDes = ({title, divided = true, className="", children})=>{
    return(
        <Flex className={className+" word_title-content"}>
            <Heading as = 'h3' className="title">{title}</Heading>
            {
                divided&&
                    <div className="divider"/>
            }
            {children}

          
            
        </Flex>
    )
}

export default WordDes;