import React from "react";

import { useState } from "react";
import { Tab, TabPanel, TabPanels, Tabs, Image, TabList} from "@chakra-ui/react";

const ImageTab = ({resource})=>{
    const [tabIndex, setTabIndex] = useState(0);
    return(
        <Tabs variant='soft-rounded' colorScheme='green'  onChange={(index) => {setTabIndex(index);}}>
        <TabPanels>
            {
                resource.map((panel,index)=>{
                    return(
                        <TabPanel>
                            <Image className='wrapper left' src={panel} width="100%"/>
                        </TabPanel>
                    )
                })
            }
        </TabPanels>
        <TabList>
            {
                resource.map((tab,index)=>{
                    return (
                        <Tab  className={index === tabIndex ?"onselected works_grid_tab-index": "works_grid_tab-index"}>
                            <Image className='wrapper left' src={tab} width="100%"/>
                        </Tab>
                    )
                })
            }
        </TabList>
    </Tabs>
)
}

export default ImageTab;