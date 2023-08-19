import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import { project4_1, project4_10, project4_11, project4_2, project4_3, project4_4, project4_5, project4_6, project4_7, project4_8, project4_9} from '../../assets/imports';

import Header from "../../assets/project4/header.png";
import SubHeader from "../../components/header/subHeader";
import ImageCard from "../../components/imageCard";
import CodeCard from "../../components/codeCard";
import WorksFooter from "../../components/footer/WorksFooter";

const Project4 = (props) =>{
    const concept=["TeX Gyre Adventor", "Flat Illustration Drawing", "Vivid Color"];
    return(
        <Flex className="works-wrapper project-2">
            <SubHeader
                color = "#FFCEB2" 
                image={Header}
                title={"Marry Me In My Way"}
                category={"Illustration Book"}
                duration={"7 Weeks"} 
                tools={"Adobe suite, Procreate"}
                isSelf={true}>
                    <Flex className="works_right-content">
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Challenge</Heading>
                            <div className="divider"/>
                            <p>From a group of Chinese dancers to Chinese culture advocates, the Chinese Collective Arts Association has been playing a significant role in promoting and educating the Chinese cultural arts to the public through various events in the city Ontario, Toronto, Canada.
                                <br/><br/>The association needs an efficient way to spread out the Chinese cultural arts. As dancers and non-profit organization runners, they have put enthusiasm and love into their career. Now, this should be a consistent way to meet their goals.
                            </p>
                        </Flex>
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Process</Heading>
                            <div className="divider"/>
                            <p>With all young passionate dancers, promoting Chinese Cultural Arts should never be depressing or boring. The idea was building the bright and abstractive figures to present one of the traditional Chinese cultures. 
                                <br/><br/>Considering the Chinese culture, arts and aesthetics, I decided to use the Traditional Chinese Wedding. The book is also a convenient way to deliver as a gift or a souvenir and store the culture for further generations.
                            </p>
                        </Flex>
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Solution</Heading>
                            <div className="divider"/>
                            <p>Every conveyed culture is a treasure, no matter if it is present or not present at all. Traditional culture should always be stored for future generations. It is important not to forget the old culture while living in a new time. However, the old culture seems to be boring and the current generation is not eager to learn it. The audience	&#39;s minds towards old culture should be happy and active when they are reading. The book introduces traditional culture in a fun and modern way by the exaggerating illustrations and warm based colors, which are designed to look interesting with the Chinese marriage procedure. Red stands for happiness in traditional Chinese culture, and also it gives the book more energy. 
                                <br/><br/>By using the modern typography, it shows more contemporary feelings that will hold audience’s attention. A clean, middle standing layout helps readers focus, and read more relaxed. After reading this procedure, the audience should feel more attracted and curious about the traditional Chinese marriage and certainly, they will trust love more.
                            </p>
                        </Flex>
                    </Flex>
            </SubHeader>
            <Flex className="works_content-container" >
                <Flex style={{padding: '32px 4px'}}>
                    <ImageCard img={project4_1}/>
                    <ImageCard img={project4_2}/>
                    <ImageCard img={project4_3}/>
                </Flex>
                <Flex style={{padding: '32px 4px'}}>
                    <ImageCard img={project4_4}/>
                    <ImageCard img={project4_5} describe="Sketches"/>
                </Flex>
                <ImageCard className='img_card' img={project4_6} describe={'Illustrations'}/>
                <CodeCard title="concept" concept={concept} colors={["#F1593A","#852A46", "#C91F3D", "#FFC40D"]}/>
                <Flex className="img_row">
                    <Image src={project4_7}/>
                    <Image src={project4_8}/>
                </Flex>
                <Flex className="img_row">
                    <Image src={project4_9}/>
                    <Flex className="img_col">
                        <Image src={project4_10}/>
                        <Image src={project4_11}/>
                    </Flex>
                </Flex>
                <Flex className="img-description">
                    <Text>Mockups</Text>
                </Flex>
            </Flex>
            <WorksFooter curId={"4"}/>
        </Flex>
    )
}

export default Project4