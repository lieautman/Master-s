import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { Button } from '@mui/material';
import { useState } from 'react';
import SQLInjections from "./SQLInjections";
import ObjectPropertyLevelAuthorisationAttack from "./ObjectPropertyLevelAuthorisationAttack";
import ServerSideRequestForgery from "./ServerSideRequestForgery";
import BufferOverflow from "./BufferOverflow";
import MemoryLeak from "./MemoryLeak";
import CorsAttack from "./CorsAttack";
import './TypesOfAttacks.css'

function TypesOfAttacks({ listOfTopics, setListOfTopics }) {
    const [tabIndex, setTabIndex] = useState(0);
    const hasSqlInjection = listOfTopics.some(x=>x.name==="SqlInjection"||x.name==="all")
    const hasObjectPropertyLevelAuthorisation = listOfTopics.some(x=>x.name==="ObjectPropertyLevelAuthorisation"||x.name==="all")
    const hasCorsAttack = listOfTopics.some(x=>x.name==="CorsAttack"||x.name==="all")
    const hasServerSideRequestForgery = listOfTopics.some(x=>x.name==="ServerSideRequestForgery"||x.name==="all")
    const hasBufferOverflow = listOfTopics.some(x=>x.name==="BufferOverflow"||x.name==="all")
    const hasMemodyLeaks = listOfTopics.some(x=>x.name==="MemoryLeaks"||x.name==="all")


    return (
        <>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    {hasSqlInjection?<Tab>SQL injections</Tab>:<></>}
                    {hasObjectPropertyLevelAuthorisation?<Tab>Object Property Level Authorisation attack</Tab>:<></>}
                    {hasCorsAttack?<Tab>CORS attack</Tab>:<></>}
                    {hasServerSideRequestForgery?<Tab>Server Side Request Forgery</Tab>:<></>}
                    {hasBufferOverflow?<Tab>Buffer Overflow</Tab>:<></>}
                    {hasMemodyLeaks?<Tab>Memory Leaks</Tab>:<></>}
                </TabList>
                {hasSqlInjection?<TabPanel><SQLInjections></SQLInjections></TabPanel>:<></>}
                {hasObjectPropertyLevelAuthorisation?<TabPanel><ObjectPropertyLevelAuthorisationAttack></ObjectPropertyLevelAuthorisationAttack></TabPanel>:<></>}
                {hasCorsAttack?<TabPanel><CorsAttack></CorsAttack></TabPanel>:<></>}
                {hasServerSideRequestForgery?<TabPanel><ServerSideRequestForgery></ServerSideRequestForgery></TabPanel>:<></>}
                {hasBufferOverflow?<TabPanel><BufferOverflow></BufferOverflow></TabPanel>:<></>}
                {hasMemodyLeaks?<TabPanel><MemoryLeak></MemoryLeak></TabPanel>:<></>}
            </Tabs>
            <Button style={{float:"right", margin:"20px"}} variant="contained" onClick={() => setListOfTopics([])}>Back to list</Button>

        </>
    );
}

export default TypesOfAttacks;
