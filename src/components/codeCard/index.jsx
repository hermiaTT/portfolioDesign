import { Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const CodeCard = ({title, font ="",concept="", colors})=>{
    const isBranding =  title ==="branding";
    const isConcept = title ==="concept";
    const brandDes = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ", "abcdefghijklmnopqrstuvwxyz", "0123456789"]
    return(
        <Flex className="code_card-wrapper">
            {isBranding &&
                <Heading as ='h2'>Branding Code</Heading>
            }
            {isConcept &&
                <Heading as ='h2'>Concept Style</Heading>
            }
            <div className="divider"/>
            <Flex className= "code_card-des">
                <Flex className="code_card-des-left">
                    {isBranding &&
                        <Flex className="branding">
                            <Heading as = 'h3'>{font}</Heading>
                            {
                                brandDes.map((text,index)=>{
                                    return <Text className="des_text">{text}</Text>
                                })
                            }
                        </Flex>
                    }
                    {isConcept &&
                        <Flex className="concept">
                            {
                                concept.map((text,index)=>{
                                    return(
                                        <Heading as ='h3'>{text}</Heading>
                                    )
                                })
                            }
                        </Flex>
                    }
                </Flex>
                <Flex className="code_card-right">
                    <Heading as = 'h3'>Color</Heading>
                    <Flex className="color-wrapper">
                        {
                            colors.map((color,index)=>{
                                return (
                                    <Flex className="color_container">
                                        <div className="color_block" style={{backgroundColor: color}}/>
                                        <Text>{color}</Text>
                                    </Flex>
                                )
                            
                            })
                        }
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default CodeCard;