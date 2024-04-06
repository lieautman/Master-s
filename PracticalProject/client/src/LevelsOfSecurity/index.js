import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import InsecureLoginLevel1 from '../Level1InsecureApp';
import InsecureLoginLevel2 from '../Level2InsecureApp';
import InsecureLoginLevel3 from '../Level3InsecureApp';

function LevelsOfSecurity() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <p>{`As for any other security measure, there are layers of security to an api. 
      These may allow bad actors to either destroy data, gather data, or even impersonate other users.`}</p>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Lv.1 Insecure Login</Tab>
          <Tab>Lv.2 Insecure Login</Tab>
          <Tab>Lv.3 Insecure Login</Tab>
          <Tab>Lv.4 Secure Login</Tab>
        </TabList>
        <TabPanel><InsecureLoginLevel1></InsecureLoginLevel1></TabPanel>
        <TabPanel><InsecureLoginLevel2></InsecureLoginLevel2></TabPanel>
        <TabPanel><InsecureLoginLevel3></InsecureLoginLevel3></TabPanel>
        <TabPanel>Panel 4</TabPanel>
      </Tabs>
    </>
  );
}

export default LevelsOfSecurity;
