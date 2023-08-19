import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import { project8_1, project8_2, project8_3 } from '../../assets/imports';


import Header from "../../assets/project8/header.png";
import SubHeader from "../../components/header/subHeader";
import ImageCard from "../../components/imageCard";
import WorksFooter from "../../components/footer/WorksFooter";

const Project8 = (props) =>{
    return(
        <Flex className="works-wrapper project-2">
            <SubHeader
                color = "#FCB903" 
                image={Header}
                title={"Environment Design"}
                category={"Interior Design"}
                duration={"All the time"} 
                tools={"AutoCad, Adobe suite SketchUp, Enscape Rendering"}
                isSelf={true}>
                    <Flex className="works_right-content">
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Samples</Heading>
                            <div className="divider"/>
                            <p>Interior Design Works.</p>
                        </Flex>
                    </Flex>
            </SubHeader>
            <ImageCard img={project8_1}/>
            <ImageCard img={project8_2}/>
            <ImageCard img={project8_3}/>
            <WorksFooter curId={"8"}/>
        </Flex>
    )
}

export default Project8