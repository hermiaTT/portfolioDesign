import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Flex, Heading } from "@chakra-ui/react";

import { project3_1, project3_2} from '../../assets/imports';

import Header from "../../assets/project3/header.png";
import SubHeader from "../../components/header/subHeader";
import ImageCard from "../../components/imageCard";
import CodeCard from "../../components/codeCard";
import WorksFooter from "../../components/footer/WorksFooter";

const Project3 = (props) =>{
    const concept=["Comic Typography", "Flat Illustration Drawing", "Vivid Color"];
    return(
        <Flex className="works-wrapper project-2">
            <SubHeader
                color = "#BABABA" 
                image={Header}
                title={"The Knight"}
                category={"Illustration Book"}
                duration={"3 Weeks"} 
                tools={"Adobe suite"}
                isSelf={true}>
                    <Flex className="works_right-content">
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Concept</Heading>
                            <div className="divider"/>
                            <p>This book uses a geometry shape style to create a story, teaching children bravery, kindness and honesty.</p>
                            <p>Kane is a young boy delivering the mail in a beautiful village. One day, a dragon attacked his village and he was sent to ask for help from the outside. After experiencing other villages and the kingdom, Kane then realizes that he already was a Knight full of bravery, kindness and honesty, which are three aspects of a knight. In the end, he went back and saved his home.</p>
                            <p>The style of the drawing conveys soft colours on geometric shapes, which makes children feel in touch with the characters, such as Kane or the Dragon. In the colour palette, the dragon is designed with warm red colours to present the enemy characteristic while the cold colours are applied on the people to show that they do not share the same characteristics of the dragon. The front cover has a sword, a shield, and flying leaves which gives a sense on what the story is about, to be a Knight.</p>
                            
                        </Flex>
                    </Flex>
            </SubHeader>
            <Flex className="works_content-container" >
                <ImageCard className='img_card' img={project3_1} describe={'The Knight'}/>
                <CodeCard title="concept" concept={concept} colors={["#E6E3B6","#F83448", "#FF9355", "#FFC564"]}/>
                <ImageCard className='img_card' img={project3_2} describe={'The Knight'}/>
            </Flex>
            <WorksFooter curId={"3"}/>
        </Flex>
    )
}

export default Project3