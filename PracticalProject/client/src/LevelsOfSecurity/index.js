import 'react-tabs/style/react-tabs.css';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import Login from '../LevelOneInsecureApp/Login';

function LevelsOfSecurity() {
    const [tabIndex, setTabIndex] = useState(0);

    return (
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Lv.1 Insecure App</Tab>
          <Tab>Lv.2 Insecure App</Tab>
          <Tab>Lv.3 Secure App</Tab>
        </TabList>
        <TabPanel><Login></Login></TabPanel>
        <TabPanel>Panel 2</TabPanel>
        <TabPanel>Panel 3</TabPanel>
      </Tabs>
    );
  }
  
  export default LevelsOfSecurity;
  