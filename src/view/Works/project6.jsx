import { Flex, Heading, Image, Text } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";

import { project6_1, project6_10, project6_11, project6_12, project6_13, project6_2, project6_3, project6_4, project6_5, project6_6, project6_7, project6_8, project6_9} from '../../assets/imports';

import Header from "../../assets/project6/header.png";
import SubHeader from "../../components/header/subHeader";
import ImageCard from "../../components/imageCard";
import WordDes from "../../components/field/WordDes";
import WorksFooter from "../../components/footer/WorksFooter";

const Project6 = (props) =>{
    const colorPattern = ["#533F74", "#6351AA", "#FCB803"]
    return(
        <Flex className="works-wrapper project-2">
            <SubHeader
                color = "#493F74" 
                image={Header}
                title={"Travel Planner"}
                category={"App Design"}
                duration={"1 Month"} 
                tools={"Figma, Adobe suite"}
                isSelf={true}>
                    <Flex className="works_right-content">
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Concept</Heading>
                            <div className="divider"/>
                            <p>Travel planner can keep those info and remind people when the next activity coming. People don&#39;t have to stick to the plan, but they are having a better view on what is going on next, and decide whether join it or not.</p>
                        </Flex>
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Issue</Heading>
                            <div className="divider"/>
                            <p>When people travel, they most likely to do research on events, views, or restaurants ahead. People may write them down on a paper, however, it is possible that people lose that paper and research for different locations again. There is also chance that people forget to buy things or to visit places. </p>
                            
                        </Flex>
                    </Flex>
            </SubHeader>
            <Flex className="works_content-container" >
                <ImageCard className='img_card' img={project6_1}/>
                <Flex className="word_des-wrapper">
                    <WordDes title={"Users"}>
                        <p>Most users already have at least 1 thing planned to use this app as reminder and manager. </p>
                    </WordDes>
                    <WordDes title={"Audience target"}>
                        <p>People who travel to new places and need to get a better knowledge of local information. 
                            <br/><br/>Groups who have business trip and want to manage people and things clearly and tight.
                            <br/><br/>People who love to keep their travel records as a journey.
                        </p>
                    </WordDes>
                    <WordDes title={"Priority"} >
                        <p>To provide an easier and continent way&#40;comparing to paper&#41;to save and remind about the aim of this trip.</p>
                    </WordDes>
                    <WordDes title={"User Stickiness"}>
                        <p>This could be a travel journey keeping recording the history about the trip.&#40;Where people go, what they do, who they meet, make it their own trip map.&#41;</p>
                    </WordDes> 
                </Flex>
                <ImageCard style={{width:'50%'}}img={project6_2} />
                <Flex className="word_des-wrapper">
                    <WordDes title={"Research"}>
                        <p>45.45% of participants like to many researches on their activities &#40;local events or restaurant&#41; before traveling.
                            <br/><br/>45.45% of participants have written down the place or restaurant that they decide to go a few times, as well as 36.36% of them usually do.
                            <br/><br/>81.82% of participants have experienced forgetting to buy something or to go some places after they returned from traveling at least once.
                            <br/><br/>36.36% of participants have experienced almost being lost in local and having trouble finding places.
                            <br/><br/>54.55% of participants have confirmed that they find planning ahead before traveling help so much, as well as 27.27% believe that definitely help.
                        </p>
                    </WordDes>
                    <WordDes title={"Functions and Requirementst"}>
                        <p>Remind people the things they planned before traveling.
                            <br/>Providing easier way and convenient traveling experience.
                            <br/>Share activities with others &#40;friends, family members, business colleagues&#41;
                            <br/>Record of users&#39; visited places, distance, people that they met.
                        </p>
                        <p>High-tone colours to catch eyes.
                            <br/>Clear and clean version to use.
                            <br/>Comfortable fonts.
                            <br/>Give pictures for places. 
                            <br/>Fancy Record page that make users feel achievements.
                        </p>
                    </WordDes>
                    <WordDes title={"Competitor Analysis"}/>
                </Flex>
                <ImageCard img={project6_3} />
                <Flex className="logo-design float-right">
                    <WordDes title={"Logo Design"}/>
                    <Image className="logo-img" src={project6_4}/>
                    <Flex className="logo-container">
                        <Image src={project6_5}/>
                        <Image src={project6_6}/>
                        <Image src={project6_7}/>
                    </Flex>
                    <Heading as = 'h3'>Color choices:</Heading>
                    <Flex className="color_pattern-wrapper">
                        {
                            colorPattern.map((color, index)=>{
                                return(
                                    <Flex className="color_strip">
                                        <div className="color_block-square opacity-1" style={{backgroundColor: color}}/> 
                                        <p>{color}</p>
                                        <div className="color_block-square opacity-8" style={{backgroundColor: color, opacity:'0.8'}}/> 
                                        <div className="color_block-square opacity-6" style={{backgroundColor: color, opacity:'0.6'}}/> 
                                        <div className="color_block-square opacity-4" style={{backgroundColor: color, opacity:'0.4'}}/> 
                                        <div className="color_block-square opacity-2" style={{backgroundColor: color, opacity:'0.2'}}/> 
                                    </Flex>
                                )
                            })
                        }
                    </Flex>
                    <div className="typo">
                        <Heading as="h3">Typography : Slenco black</Heading>
                        <Text>ABCDEFGHIJKLMNOPQRSTUVWXYZ</Text>
                        <Text>abcdefghijklmnopqrstuvwxyz</Text>
                        <Text>1234567890</Text>
                    </div>
                </Flex>
                <WordDes className="word_des-wrapper" title="User flow"/>
                <ImageCard img={project6_8} describe="CHARGE CAFE Interior Design" style={{padding:'12px 0'}}/>
                <ImageCard img={project6_9}/>
                <Flex className="img_left">
                    <Image src={project6_10}/>
                    <Image src={project6_11}/>
                </Flex>
                <Flex className="img_right">
                    <Image src={project6_12}/>
                    <Image src={project6_13}/>
                </Flex>
            </Flex>
            <WorksFooter curId={"6"}/>
        </Flex>
    )
}

export default Project6