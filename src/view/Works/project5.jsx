import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import { project5_1, project5_10, project5_11, project5_12, project5_13, project5_14, project5_15, project5_2, project5_3, project5_4, project5_5, project5_6, project5_7, project5_8, project5_9, project7_1, project7_2, project7_3, project7_4, project7_5, project7_6, project7_7} from '../../assets/imports';

import Header from "../../assets/project5/header.png";
import SubHeader from "../../components/header/subHeader";
import ImageCard from "../../components/imageCard";
import WorksFooter from "../../components/footer/WorksFooter";

const Project5 = (props) =>{
    return(
        <Flex className="works-wrapper project-2">
            <SubHeader
                color = "#FCB903" 
                image={Header}
                title={"Illustrations"}
                category={"Illustration Drawing"}
                duration={"All the time"} 
                tools={"Adobe suite / Procreate"}
                isSelf={true}>
                    <Flex className="works_right-content">
                        <ImageCard img={project5_1}/>
                    </Flex>
            </SubHeader>
            <Flex className="works_content-container" >
                
                <Flex className="img_row" style={{paddingTop: "180px"}}>
                    <Flex className="img_col">
                        <Image src={project5_2}/>
                        <Flex className="img_row">
                            <Image src={project5_4}/>
                            <Image src={project5_5}/>
                        </Flex>
                    </Flex>
                    <Flex className="img_col">
                        <Image src={project5_3}/>
                        <Image src={project5_6}/>
                    </Flex>
                </Flex>
                <Flex className="img_row second">
                    <Flex className="img_col second">
                        <Image src={project5_7}/>
                        <Flex className="img_row">
                            <Image src={project5_9}/>
                            <div className="pink"/>
                        </Flex>
                    </Flex>
                    <Image className="third" src={project5_8}/>
                </Flex>
                <Flex className="img_row abs-container">
                    <div className="orange"/>
                    <Image className="abs-img" src={project5_10}/>
                    <Flex className="img_col abs-row">
                        <Image src={project5_11}/>
                        <div className="purple"/>
                    </Flex>
                </Flex>
                <Flex className="img_col last">
                    <Flex className="img_row">
                        <Image src={project5_12}/>
                        <Image src={project5_13}/>
                    </Flex>
                    <Flex className="img_row">
                        <Image src={project5_14}/>
                        <Image src={project5_15}/>
                    </Flex>
                </Flex>
            
            </Flex>
            <WorksFooter curId={"5"}/>
        </Flex>
    )
}

export default Project5