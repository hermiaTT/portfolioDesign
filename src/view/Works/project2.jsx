import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Flex, Heading, Image } from "@chakra-ui/react";

import { project2_2, project2_3, project2_4, project2_5, project2_6, project2_7, project2_8} from '../../assets/imports';

import Header from "../../assets/project2/header.png";
import SubHeader from "../../components/header/subHeader";
import image1 from "../../assets/project2/project2_img-1.png";
import ImageCard from "../../components/imageCard";
import CodeCard from "../../components/codeCard";
import ImageGallery from "../../components/field/ImageGallery";
import WorksFooter from "../../components/footer/WorksFooter";

const Project2 = (props) =>{

    return(
        <Flex className="works-wrapper project-2">
            <SubHeader
                color = "#075197" 
                image={Header}
                title={"CHARGE CAFE"}
                category={"Branding Design"}
                duration={"1 Month"} 
                tools={"Figma, Adobe suite"}
                isSelf={true}>
                    <Flex className="works_right-content">
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Concept</Heading>
                            <div className="divider"/>
                            <p>People need coffee indeed! It is not only a drink, but also an iconic lifestyle and method to enlighten the morning time. CHARGE CAFE is focusing on power people up and bring the energy to them through drinks. 
                            &#40;Just like the Jellyfish!&#41;</p>
                            <p>The electric are also present on different drinks by the different levels of caffeine included. One icon stands for the weak, two for the median, and three for the strong.</p>
                            <Image src={image1} style={{width:'60%', marginTop: "54px"}}/>
                        </Flex>
                    </Flex>
            </SubHeader>
            <Flex className="works_content-container" >
                <ImageCard className='img_card' img={project2_2} describe={'CHARGE CAFE Mockups'}/>
                <CodeCard title="branding" font="Roboto" colors={["#fff200","#065196"]}/>
                <ImageCard className='img-full' img={project2_3}/>
                <ImageGallery imageL={project2_4} imageR1={project2_5} imageR2={project2_6} text="CHARGE CAFE Mockups"/>
                <ImageCard className="img-half" img={project2_7}/>
                <ImageCard className="img-half" img={project2_8}/>
            </Flex>
            <WorksFooter curId={"2"}/>
        </Flex>
    )
}

export default Project2