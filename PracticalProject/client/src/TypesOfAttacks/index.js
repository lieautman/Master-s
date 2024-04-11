import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import SQLInjections from "../SQLInjections";

function TypesOfAttacks() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
        <>
            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SQL injections</Tab>
                    <Tab>Attack2</Tab>
                </TabList>
                <TabPanel><SQLInjections></SQLInjections></TabPanel>
                <TabPanel>Attack2</TabPanel>
            </Tabs>
        </>
    );
}

export default TypesOfAttacks;
