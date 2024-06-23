import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import InsecureInputLevel1 from "./InsecureInputLevel1"
import SecureInputLevel2 from "./SecureInputLevel2"

function BufferOverflow() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <p>{"Threat description:"}</p>
      <p>{`A buffer overflow problem is caused when a memory unsafe method is called. Theese methods may allow an attacker to overwrite process memory, changing variable or process flow.`}</p>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Lv.1 Insecure input</Tab>
          <Tab>Lv.2 Secure input</Tab>
        </TabList>
        <TabPanel><InsecureInputLevel1></InsecureInputLevel1></TabPanel>
        <TabPanel><SecureInputLevel2></SecureInputLevel2></TabPanel>
      </Tabs>
    </>
  );
}

export default BufferOverflow;
