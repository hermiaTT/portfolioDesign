import { Tab, TabList, Tabs, TabPanel, TabPanels, Flex, Image } from "@chakra-ui/react";
import React, {useState} from "react";



const ContentTab = ({resource, bg})=>{
    const [tabIndex, setTabIndex] = useState(0);
    return(
        <Flex className="content-tab" >
            <Tabs variant="unstyled" width={'100%'} onChange={(index) => {setTabIndex(index);}}>
                <TabList bg ='#494845'className="content_tab-tab">
                    {resource.map((item,index)=>{
                        return <Tab className={index === tabIndex ?"selected content_tab-index":"unselected content_tab-index"}>{item.tab}</Tab>
                    })}
                </TabList>

                <TabPanels>
                    {
                        resource.map((item,index)=>{
                            return(
                                <TabPanel>
                                    <Flex className="content_tab-content" bg={bg}>
                                        <Image className="content_tab-content-img" src={item.image}/>
                                        <Flex className="content_tab-decription" >
                                            <p>{item.description}</p>
                                        </Flex>
                                    </Flex>
                                </TabPanel>
                            )
                        })
                    }
                </TabPanels>
            </Tabs>
        </Flex>
    )
}

export default ContentTab;