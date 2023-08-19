import { Flex, Heading, IconButton, Image } from "@chakra-ui/react";
import React from "react";
import { back_arrow } from "../../assets/imports";

import {useNavigate } from 'react-router-dom'; 
const Header = ({bg,title, path})=>{
    const navigate = useNavigate();
    return(
        <Flex className="works_header" bg={bg}>
            <Heading as="h3" className='index_title wrapper'> {title}</Heading>
            <IconButton className="header_back-btn" 
                        icon={<Image src={back_arrow}
                        onClick={()=>navigate(path)}/>}/>
        </Flex>
    )
}

export default Header;