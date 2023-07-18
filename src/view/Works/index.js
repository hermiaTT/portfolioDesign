import { Tab, TabList, TabIndicator, TabPanel, Tabs, TabPanels, Flex, Heading, Grid, GridItem, Image, IconButton } from "@chakra-ui/react";
import React from "react";

import { useState } from "react";
import { FaAngleDoubleRight} from "react-icons/fa";
import { brand, works_interior} from '../../assets/imports';

import { color } from "framer-motion";
import ImageTab from "../../components/field/ImageTab";

const Works = (props) =>{

  const [tabIndex, setTabIndex] = useState(0);

  const tabs = ["INTERIOR SPACE", "BRANDING", "DIGITAL", "GRAPHIC"];
  const interiorTab1 = [works_interior, works_interior,works_interior,works_interior]
  const interiorTab2 = [works_interior, works_interior,works_interior,works_interior]
  const brandingTab = [brand, brand,brand,brand]
  const digitalTab1 = [works_interior, works_interior,works_interior,works_interior]
  const digitalTab2 = [works_interior, works_interior,works_interior,works_interior]
  const digitalTab3 = [works_interior, works_interior,works_interior,works_interior]
    return(
        <Flex className="works_wrapper">
            <Tabs variant="unstyled" width={'100%'} onChange={(index) => {setTabIndex(index);}}>
                <Flex className="works_header">
                    <Heading as="h3" className='index_title wrapper'> Works</Heading>
                    <TabList className="works_sub-nav"> 
                        {tabs.map((tab, index) => {
                            return (
                            <Tab className={index === tabIndex ?"selected works_tab-index":"unselected works_tab-index"}>
                                {tab}
                            </Tab>
                            );
                        })}
                    </TabList>    
      
                    <div style={{width: '20%'}}></div>    
                </Flex>
                <TabPanels>
                    <TabPanel>



                        {/* interior  1*/}
                        <Flex className="works_grid_content interior" >
                            <Flex className="works_grid_top-content">
                                <Flex className= "works_grid_top-content-left"bg='#FFC420'  >
                                    <div className="works_grid_left top">1</div>
                                    <div className="works_grid_left bottom">  
                                        <Heading as="h3">RESIDENTIAL</Heading>
                                            <p>Concept Development</p>
                                            <p>Measurement</p>
                                            <p>Space Planning</p>
                                            <p>Furniture Suggestions</p>
                                            <p>Rendering</p>
                                    </div>
                                </Flex>
                                <Flex className="works_grid_top-content-right"  bg='#FBB901' >      
                                    <ImageTab  resource={interiorTab1}/>
                                </Flex>
                            </Flex>
                            <Flex className="works_grid-description-wrap" bg = "#FBB901">
                                <div className="works_grid-description-content" >
                                    <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                </div>
                                <div className="works_next_page-btn" >
                                    <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                </div>
                            </Flex>                   
                        </Flex>   
                        {/* interior  2*/}
                        <Flex className="works_grid_content interior" >
                            <Flex className="works_grid_top-content">
                                <Flex className= "works_grid_top-content-left"bg='#FFC420'  >
                                    <div className="works_grid_left top">2</div>
                                    <div className="works_grid_left bottom">  
                                        <Heading as="h3">RESIDENTIAL</Heading>
                                            <p>Concept Development</p>
                                            <p>Measurement</p>
                                            <p>Space Planning</p>
                                            <p>Furniture Suggestions</p>
                                            <p>Rendering</p>
                                    </div>
                                </Flex>
                                <Flex className="works_grid_top-content-right" bg='#FBB901' >                                       
                                    <ImageTab  resource={interiorTab2}/>
                                </Flex>
                            </Flex>
                            <Flex className="works_grid-description-wrap" bg = "#FBB901">
                                <div className="works_grid-description-content" >
                                    <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                </div>
                                <div className="works_next_page-btn" >
                                    <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                </div>
                            </Flex>                   
                        </Flex>   
   
                    </TabPanel>
                    <TabPanel>
                        {/* branding  1*/}
                        <Flex className="works_grid_content branding" >
                            <Flex className="works_grid_top-content">
                                <Flex className= "works_grid_top-content-left"bg='#FFC420'  >
                                    <div className="works_grid_left top">1</div>
                                    <div className="works_grid_left bottom">  
                                        <Heading as="h3">RESIDENTIAL</Heading>
                                            <p>Concept Development</p>
                                            <p>Measurement</p>
                                            <p>Space Planning</p>
                                            <p>Furniture Suggestions</p>
                                            <p>Rendering</p>
                                    </div>
                                </Flex>
                                <Flex className="works_grid_top-content-right"  bg='#075197' >      
                                    <ImageTab  resource={brandingTab}/>
                                </Flex>
                            </Flex>
                            <Flex className="works_grid-description-wrap" bg = "#075197">
                                <div className="works_grid-description-content" >
                                    <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                </div>
                                <div className="works_next_page-btn" >
                                    <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                </div>
                            </Flex>                   
                        </Flex>   

                    </TabPanel>
                    <TabPanel>
                        {/* digital  1*/}
                        <Flex className="works_grid_content digital" >
                            <Flex className="works_grid_top-content">
                                <Flex className= "works_grid_top-content-left"bg='#FFC420'  >
                                    <div className="works_grid_left top">1</div>
                                    <div className="works_grid_left bottom">  
                                        <Heading as="h3">UI/UX Design</Heading>
                                        <p>Research</p>
                                        <p>Persona</p>
                                        <p>User Flow</p>
                                        <p>Site Map</p>
                                        <p>User Test</p>
                                    </div>
                                </Flex>
                                <Flex className="works_grid_top-content-right"  bg='#F54F4F' >      
                                    <ImageTab  resource={digitalTab1}/>
                                </Flex>
                            </Flex>
                            <Flex className="works_grid-description-wrap" bg = "#494845">
                                <div className="works_grid-description-content" >
                                    <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                </div>
                                <div className="works_next_page-btn" >
                                    <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                </div>
                            </Flex>                   
                        </Flex>   
  
                        {/* digital  2*/}
                        <Flex className="works_grid_content digital" >
                            <Flex className="works_grid_top-content">
                                <Flex className= "works_grid_top-content-left"bg='#FFC420'  >
                                    <div className="works_grid_left top">2</div>
                                    <div className="works_grid_left bottom">  
                                        <Heading as="h3">UI/UX Design</Heading>
                                        <p>Research</p>
                                        <p>Persona</p>
                                        <p>User Flow</p>
                                        <p>Site Map</p>
                                        <p>User Test</p>
                                    </div>
                                </Flex>
                                <Flex className="works_grid_top-content-right"  bg='#F54F4F' >      
                                <ImageTab  resource={digitalTab2}/>

                                </Flex>
                            </Flex>
                            <Flex className="works_grid-description-wrap" bg = "#494845">
                                <div className="works_grid-description-content" >
                                    <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                </div>
                                <div className="works_next_page-btn" >
                                    <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                </div>
                            </Flex>                   
                        </Flex>   
  
                        {/* digital  3*/}
                        <Flex className="works_grid_content digital" >
                            <Flex className="works_grid_top-content">
                                <Flex className= "works_grid_top-content-left"bg='#FFC420'  >
                                    <div className="works_grid_left top">3</div>
                                    <div className="works_grid_left bottom">  
                                        <Heading as="h3">UI/UX Design</Heading>
                                        <p>Research</p>
                                        <p>Persona</p>
                                        <p>User Flow</p>
                                        <p>Site Map</p>
                                        <p>User Test</p>
                                    </div>
                                </Flex>
                                <Flex className="works_grid_top-content-right"  bg='#F54F4F' >      
                                    <ImageTab  resource={digitalTab3}/>
                                </Flex>
                            </Flex>
                            <Flex className="works_grid-description-wrap" bg = "#494845">
                                <div className="works_grid-description-content" >
                                    <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                </div>
                                <div className="works_next_page-btn" >
                                    <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                </div>
                            </Flex>                   
                        </Flex>   
                    </TabPanel>
                    <TabPanel>
                        <p>three!</p>
                    </TabPanel>
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default Works