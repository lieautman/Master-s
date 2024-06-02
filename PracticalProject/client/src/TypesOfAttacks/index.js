import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from '@mui/material';
import { useState } from 'react';
import SQLInjections from "./SQLInjections";
import ObjectPropertyLevelAuthorisationAttack from "./ObjectPropertyLevelAuthorisationAttack";
import './TypesOfAttacks.css'

function TypesOfAttacks({ listOfTopics, setListOfTopics }) {
    const [tabIndex, setTabIndex] = useState(0);
    console.log("ceva", listOfTopics)
    return (
        <>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SQL injections</Tab>
                    <Tab>Object Property Level Authorisation attack</Tab>
                    <Tab>CORS attack</Tab>
                    <Tab>Server Side Request Forgery</Tab>
                </TabList>
                <TabPanel><SQLInjections></SQLInjections></TabPanel>
                <TabPanel><ObjectPropertyLevelAuthorisationAttack></ObjectPropertyLevelAuthorisationAttack></TabPanel>
                <TabPanel>CORS attack</TabPanel>
                <TabPanel>Server Side Request Forgery</TabPanel>
            </Tabs>
            <Button style={{float:"right", margin:"20px"}} variant="contained" onClick={() => setListOfTopics([])}>Back to list</Button>

        </>
    );
}

export default TypesOfAttacks;
