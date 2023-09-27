import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router";
import { Flex, Heading, Image, Text } from "@chakra-ui/react";

import { project1_1, project1_2, project1_3 } from '../../assets/imports';

import Header from "../../assets/project1/hear.png";
import SubHeader from "../../components/header/subHeader";
import ImageCard from "../../components/imageCard";
import WordDes from "../../components/field/WordDes";
import WorksFooter from "../../components/footer/WorksFooter";

const Project1 = (props) =>{
    const colorPattern = ["#533F74", "#6351AA", "#FCB803"]
    return(
        <Flex className="works-wrapper project-2">
            <SubHeader
                color = "#55008A" 
                image={Header}
                title={"VERZE."}
                category={"UI/UX Design"}
                duration={"2022/Sep. — 2023/Jul."} 
                tools={"Figma, Adobe suite"}
                isSelf={false}>
                    <Flex className="works_right-content">
                        <Flex className="title-content">
                            <Heading as = 'h3' className="title">Role</Heading>
                            <div className="divider"/>
                            <p>Leading an UIUX design team, focusing on all aspects of mobile game designs. Identify the root logic and doing user research, wireframing, giving concept directions, style analyzing, improving, meeting with stakeholders and clients to confirm their requirements.</p>
                        </Flex>
                        <Flex className="colored">
                            <Text>This is the new way of Social Networking in Metaverse !</Text>
                        </Flex>
                        <Flex className='note-container'>
                            <Text className="note">*Please be aware that the project is still in progress. Only limited information can be presented.<br/><br/>*The project is still under NDA while the information presented is with the Verze.Inc.’s permission.</Text>
                        </Flex>
                    </Flex>
            </SubHeader>
            <Flex className="works_content-container" >
                    <WordDes className="word_des-wrapper" title={"Basic Concept"}>
                        <p>Providing a virtual mobile world under Mate-verse concept, creating more social chances in reality through online connections.</p>
                    </WordDes>
                    <ImageCard img={project1_1}/>
                <Flex className="word_des-wrapper">
                    <WordDes title={"Commercial living mode."} divided={false}>
                        <p>Commercial zones, including restaurants, clubbings, galleries, or anywhere people would join in with social networking chances.</p>
                    </WordDes>
                    <WordDes title={"Home social mode."} divided={false}>
                        <p>Users&#39; private space. Decorating, placing items, inviting friends, and more activities happen here.</p>
                    </WordDes>
                    <WordDes title={"Office mode."} divided={false}>
                        <p>Office space, provides special interior looks and interaction for each firm.</p>
                    </WordDes> 
                </Flex>
                <ImageCard img={project1_2}/>
                <ImageCard img={project1_3}/>
                <Flex className="word_des-wrapper">
                    <WordDes title={"Pain Points:"} >
                        <p>When people go to the commercial locations, it is hard for them to get to know new people or specific people that they want to make friends with if they are shy. Icebreaking has always existed and not all people can do it well in reality.
                        <br/><br/>Verze can provide a platform giving opportunities for users to make friends based on people’s habits, appearance, even the places they always go.</p>
                    </WordDes>
                    <WordDes title={"Moving Forward"}>
                        <p>Giving revises according to stakeholders&#39; feedbacks, and specific needs.
                            <br/><br/>Collaborate with 3D model team to secure the style and art of interiors, exteriors, and avatars.
                            <br/><br/>Preparing for the 1st user testing after meeting of stakeholders with approves for next step approaches.
                        </p>
                    </WordDes>
                </Flex>
            </Flex>
            <WorksFooter curId={"1"}/>
        </Flex>
    )
}

export default Project1