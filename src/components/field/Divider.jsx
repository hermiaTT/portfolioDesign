import { Flex, Heading } from "@chakra-ui/react";
import React from "react";


const Divider = ({resource})=>{
    return (
        <Flex className="divider-wrapper" bg = {resource.bgRight}>
            <Flex className="divider-left" bg={resource.bgLeft}>
                <Heading as='h2'>{resource.title}</Heading>
            </Flex>
            <Flex className="divider-right">
                <p>{resource.description}</p>
            </Flex>
        </Flex>
    )
}

export default Divider;