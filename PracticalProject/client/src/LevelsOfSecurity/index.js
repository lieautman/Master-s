import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import InsecureLoginLevelOne from '../LevelOneInsecureApp';
import InsecureLoginLevelTwo from '../LevelTwoInsecureApp';

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
          <Tab>Lv.3 Secure Login</Tab>
        </TabList>
        <TabPanel><InsecureLoginLevelOne></InsecureLoginLevelOne></TabPanel>
        <TabPanel><InsecureLoginLevelTwo></InsecureLoginLevelTwo></TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </Tabs>
    </>
  );
}

export default LevelsOfSecurity;
