import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { Flex, Image, IconButton, Text } from "@chakra-ui/react";
import { arrow_left, arrow_right } from "../../assets/imports";

const WorksFooter = ({curId})=>{
    const navigate = useNavigate();

    const toPreivous=(curId)=>{
        let preId = parseInt(curId)-1;
        let path = '/project/'+ preId;
        navigate(path);
    }
    const toNext=(curId)=>{
        let nextId = parseInt(curId)+1;
        let path = '/project/'+ nextId;
        navigate(path);
    }

    return(
        <Flex className="works_footer-wrapper">
            <Flex className="works_footer-bar">
                {curId != "1" &&
                    <Flex className="footer_btn-container left" onClick={()=>{toPreivous(curId)}}>
                        <IconButton className="btn" icon={<Image src={arrow_left}/>}/>
                        <Text>Moving Forward</Text>
                    </Flex>
                }
                {curId != "8" &&
                    <Flex className="footer_btn-container right" onClick={()=>{toNext(curId)}}>
                        <Text>Moving Forward</Text>
                        <IconButton className="btn" icon={<Image src={arrow_right}/>}/>              
                    </Flex>
                }
            </Flex>
            <div className="works_footer-foot"/>
        </Flex>
    )
}

export default WorksFooter;