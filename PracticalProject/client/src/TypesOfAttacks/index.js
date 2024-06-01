import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import SQLInjections from "./SQLInjections";
import ObjectPropertyLevelAuthorisationAttack from "./ObjectPropertyLevelAuthorisationAttack";
import './TypesOfAttacks.css'

function TypesOfAttacks({listOfAttacks}) {
    const [tabIndex, setTabIndex] = useState(0);

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
        </>
    );
}

export default TypesOfAttacks;
