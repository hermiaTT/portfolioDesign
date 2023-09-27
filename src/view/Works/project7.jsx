import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import { project7_1, project7_2, project7_3, project7_4, project7_5, project7_6, project7_7} from '../../assets/imports';

import Header from "../../assets/project7/header.png";
import SubHeader from "../../components/header/subHeader";
import ImageCard from "../../components/imageCard";
import WorksFooter from "../../components/footer/WorksFooter";

const Project7 = (props) =>{
    return(
        <Flex className="works-wrapper project-2">
            <SubHeader
                color = "#E6E6E6" 
                image={Header}
                title={"Websites"}
                category={"Website Design"}
                duration={"All the time"} 
                tools={"Figma, Adobe suite"}
                isSelf={true}>
                    <Flex className="works_right-content">
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Samples</Heading>
                            <div className="divider"/>
                            <p>Website samples with headphone topic.</p>
                        </Flex>
                    </Flex>
            </SubHeader>
            <Flex className="works_content-container" >
                <ImageCard img={project7_1}/>
                <Flex className="img_row_g">
                    <Image src={project7_2}/>
                    <Image src={project7_3}/>
                </Flex>
                <ImageCard img={project7_4}/>
                <ImageCard img={project7_5}/>
                <ImageCard img={project7_6}/>
                <ImageCard img={project7_7}/>
            </Flex>
            <WorksFooter curId={"7"}/>
        </Flex>
    )
}

export default Project7