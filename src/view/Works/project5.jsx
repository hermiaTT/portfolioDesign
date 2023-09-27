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
                <div className="img_glry-container">
                    <Flex className="img-box img1">
                        <Image src={project5_2}/>
                    </Flex>
                    <Flex className="img-box img2">
                        <Image src={project5_3}/>
                    </Flex>
                    <Flex className="img-box img3">
                        <Image src={project5_6}/>
                    </Flex>
                    <Flex className="img-box img4">
                        <Image src={project5_4}/>
                    </Flex>
                    <Flex className="img-box img5">
                        <Image src={project5_5}/>
                    </Flex>
                    </div>
                <div className="img_glry-container-2">
                    <Flex className="img-box img6">
                        <Image src={project5_7}/>
                    </Flex>
                    <Flex className="img-box img7">
                        <Image className="third" src={project5_8}/>
                    </Flex>
                    <Flex className="img-box img8">
                        <Image src={project5_9}/>
                    </Flex>
                    <Flex className="img-box img9">
                        <div className="pink"/>
                    </Flex>
                    <Flex className="img-box img10">
                        <div className="orange"/>
                    </Flex>
                    <Flex className="img-box img11">
                        <Image className="abs-img" src={project5_10}/>
                    </Flex>
                    <Flex className="img-box img12">
                        <Image src={project5_11}/>
                    </Flex>
                    <Flex className="img-box img13">
                        <div className="purple"/>
                    </Flex>
                </div>
        
                <Flex className="img_col last">
                    <Flex className="img_row_g">
                        <Image src={project5_12}/>
                        <Image src={project5_13}/>
                    </Flex>
                    <Flex className="img_row_g">
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