import { Flex, Image, Heading } from "@chakra-ui/react";
import React from "react";

const SubHeader = ({color, image, title, category, duration, tools, isSelf, children})=>{
    return(
        <Flex className="works-header-wrapper">
            <Flex className="sub-header-container" bg = {color}>
                <Image className= 'sub-header-img'src = {image}/>
            </Flex>
            <Flex className="card-wrapper">
                <Flex className="card-left-container">
                    <Flex className="title-content">
                        <Heading as = 'h3' className="title">{title}</Heading>
                        <div className="divider"/>
                        <p>{category}</p>
                    </Flex>
                    <Flex className="index-content">
                        <Flex className="content-box">
                            <Heading as = "h2">Duration</Heading>
                            <p>{duration}</p>
                        </Flex>
                        <Flex className="content-box">
                            <Heading as = "h2">Tools</Heading>
                            <p>{tools}</p>
                        </Flex>
                        {isSelf &&
                            <Flex as = "h2">Self Project</Flex>
                        }
                        {!isSelf &&
                            <>
                                <Flex as = "h2">Team Members</Flex>
                                <p>4</p>
                            </>
                        }
                    </Flex>
                </Flex>
                <Flex className="card-right-container">
                    {children}
                </Flex>

            </Flex>
        </Flex>
    )
}

export default SubHeader;