import { Tab, TabList, TabIndicator, TabPanel, Tabs, TabPanels, Flex, Heading, Grid, GridItem, Image, IconButton } from "@chakra-ui/react";
import React from "react";

import { useState } from "react";
import { FaAngleDoubleRight} from "react-icons/fa";
import { works_interior } from "../../assets/imports";
import { color } from "framer-motion";

const Works = (props) =>{

  const [tabIndex, setTabIndex] = useState(0);

  const tabs = ["INTERIOR SPACE", "BRANDING", "DIGITAL", "GRAPHIC"];
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
                        <Grid className="works_grid_content interior" templateRows='repeat(4, 1fr)' templateColumns='repeat(4, 1fr)'>
                            <GridItem rowSpan={3} colSpan={1} bg='#FFC420'  >
                                <div className="works_grid_left top">1</div>
                                <div className="works_grid_left bottom">  
                                    <Heading as="h3">RESIDENTIAL</Heading>
                                        <p>Concept Development</p>
                                        <p>Measurement</p>
                                        <p>Space Planning</p>
                                        <p>Furniture Suggestions</p>
                                        <p>Rendering</p>
                                </div>
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={3} bg='#FBB901' >      
                                <Tabs variant='soft-rounded' colorScheme='green'>
                                    <TabPanels>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                    </TabPanels>
                                    <TabList>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                    </TabList>
                                </Tabs>
                            </GridItem>
                            <GridItem  colSpan={4} bg='#FBB901' >
                                <div className="works_grid-description-wrap">
                                    <div style={{width: '22.5%'}}></div>
                                    <div style={{width: '55%', display:'flex'}}>
                                        <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                    </div>
                                    <div style={{width: "22.5%", position:'relative'}}>
                                        <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                    </div>
                                </div>
                            </GridItem>
                            </Grid>                
                        {/* interior  2*/}
                        <Grid className="works_grid_content interior" templateRows='repeat(4, 1fr)' templateColumns='repeat(4, 1fr)'>
                            <GridItem rowSpan={3} colSpan={1} bg='#FFC420'  >
                                <div className="works_grid_left top">2</div>
                                <div className="works_grid_left bottom">  
                                    <Heading as="h3">RETAIL</Heading>
                                        <p>Concept Development</p>
                                        <p>Measurement</p>
                                        <p>Space Planning</p>
                                        <p>Furniture Suggestions</p>
                                        <p>Rendering</p>
                                </div>
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={3} bg='#FBB901' >      
                                <Tabs variant='soft-rounded' colorScheme='green'>
                                    <TabPanels>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                    </TabPanels>
                                    <TabList>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                    </TabList>
                                </Tabs>
                            </GridItem>
                            <GridItem  colSpan={4} bg='#FBB901' >
                                <div className="works_grid-description-wrap">
                                    <div style={{width: '22.5%'}}></div>
                                    <div style={{width: '55%', display:'flex'}}>
                                        <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                    </div>
                                    <div style={{width: "22.5%", position:'relative'}}>
                                        <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                    </div>
                                </div>
                            </GridItem>
                            </Grid>      
                    </TabPanel>
                    <TabPanel>
                        {/* branding  1*/}
                        <Grid className="works_grid_content branding" templateRows='repeat(4, 1fr)' templateColumns='repeat(4, 1fr)'>
                            <GridItem rowSpan={3} colSpan={1} bg='#075197'  >
                                <div className="works_grid_left top" >1</div>
                                <div className="works_grid_left bottom">  
                                        <p>Self Project</p>
                                    <Heading as="h3">BRANDING</Heading>
                                        <p>Concept Development</p>
                                        <p>Measurement</p>
                                        <p>Space Planning</p>
                                        <p>Furniture Suggestions</p>
                                        <p>Rendering</p>
                                </div>
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={3} bg='#075197' >      
                                <Tabs variant='soft-rounded' colorScheme='green'>
                                    <TabPanels>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                    </TabPanels>
                                    <TabList>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                    </TabList>
                                </Tabs>
                            </GridItem>
                            <GridItem  colSpan={4} bg='#075197' >
                                <div className="works_grid-description-wrap">
                                    <div style={{width: '22.5%'}}></div>
                                    <div style={{width: '55%', display:'flex'}}>
                                        <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                    </div>
                                    <div style={{width: "22.5%", position:'relative'}}>
                                        <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                    </div>
                                </div>
                            </GridItem>
                            </Grid>   
                   
                    </TabPanel>
                    <TabPanel>
                        {/* digital  1*/}
                        <Grid className="works_grid_content digital" templateRows='repeat(4, 1fr)' templateColumns='repeat(4, 1fr)'>
                            <GridItem rowSpan={3} colSpan={1} bg='#075197'  >
                                <div className="works_grid_left top" >1</div>
                                <div className="works_grid_left bottom">  
                                    <Heading as="h3">VERZE</Heading>
                                    <Heading as="h3">UI/UX Design</Heading>
                                        <p>Research</p>
                                        <p>Persona</p>
                                        <p>User Flow</p>
                                        <p>Site Map</p>
                                        <p>User Test</p>
                                </div>
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={3} bg='#F54F4F' >      
                                <Tabs variant='soft-rounded' colorScheme='green'>
                                    <TabPanels>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                    </TabPanels>
                                    <TabList>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                    </TabList>
                                </Tabs>
                            </GridItem>
                            <GridItem  colSpan={4} bg='#494845' >
                                <div className="works_grid-description-wrap">
                                    <div style={{width: '22.5%'}}></div>
                                    <div style={{width: '55%', display:'flex'}}>
                                        <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                    </div>
                                    <div style={{width: "22.5%", position:'relative'}}>
                                        <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                    </div>
                                </div>
                            </GridItem>
                            </Grid>   
                        {/* digital  2*/}
                        <Grid className="works_grid_content digital" templateRows='repeat(4, 1fr)' templateColumns='repeat(4, 1fr)'>
                            <GridItem rowSpan={3} colSpan={1} bg='#075197'  >
                                <div className="works_grid_left top" >2</div>
                                <div className="works_grid_left bottom">  
                                    <Heading as="h3">VERZE</Heading>
                                    <Heading as="h3">UI/UX Design</Heading>
                                        <p>Research</p>
                                        <p>Persona</p>
                                        <p>User Flow</p>
                                        <p>Site Map</p>
                                        <p>User Test</p>
                                </div>
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={3} bg='#F54F4F' >      
                                <Tabs variant='soft-rounded' colorScheme='green'>
                                    <TabPanels>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                    </TabPanels>
                                    <TabList>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                    </TabList>
                                </Tabs>
                            </GridItem>
                            <GridItem  colSpan={4} bg='#494845' >
                                <div className="works_grid-description-wrap">
                                    <div style={{width: '22.5%'}}></div>
                                    <div style={{width: '55%', display:'flex'}}>
                                        <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                    </div>
                                    <div style={{width: "22.5%", position:'relative'}}>
                                        <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                    </div>
                                </div>
                            </GridItem>
                            </Grid>   
                        {/* digital  3*/}
                        <Grid className="works_grid_content digital" templateRows='repeat(4, 1fr)' templateColumns='repeat(4, 1fr)'>
                            <GridItem rowSpan={3} colSpan={1} bg='#075197'  >
                                <div className="works_grid_left top" >3</div>
                                <div className="works_grid_left bottom">  
                                    <Heading as="h3">VERZE</Heading>
                                    <Heading as="h3">UI/UX Design</Heading>
                                        <p>Research</p>
                                        <p>Persona</p>
                                        <p>User Flow</p>
                                        <p>Site Map</p>
                                        <p>User Test</p>
                                </div>
                            </GridItem>
                            <GridItem rowSpan={3} colSpan={3} bg='#F54F4F' >      
                                <Tabs variant='soft-rounded' colorScheme='green'>
                                    <TabPanels>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                        <TabPanel>
                                            <Image className='wrapper left' src={works_interior} width="100%"/>
                                        </TabPanel>
                                    </TabPanels>
                                    <TabList>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                        <Tab className="works_grid_tab-index"><Image className='wrapper left' src={works_interior} width="100%"/></Tab>
                                    </TabList>
                                </Tabs>
                            </GridItem>
                            <GridItem  colSpan={4} bg='#494845' >
                                <div className="works_grid-description-wrap">
                                    <div style={{width: '22.5%'}}></div>
                                    <div style={{width: '55%', display:'flex'}}>
                                        <p>OLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDSOLIUADFSHBGUGADSFBIUGOBADFIGBAIDS</p>
                                    </div>
                                    <div style={{width: "22.5%", position:'relative'}}>
                                        <IconButton fontSize='30px' className="works_next_page-icon" icon={<FaAngleDoubleRight />}/>
                                    </div>
                                </div>
                            </GridItem>
                            </Grid>   

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