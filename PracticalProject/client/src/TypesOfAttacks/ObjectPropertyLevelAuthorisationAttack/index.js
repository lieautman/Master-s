import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import InsecureDataLoading from './InsecureDataLoading';
import SecureDataLoading from './SecureDataLoading';

function ObjectPropertyLevelAuthorisationAttack() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <p>{`This attack is based on if the attacker has access to more data then intended.`}</p>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Lv.1 Insecure data loading</Tab>
          <Tab>Lv.2 Secure data loading</Tab>
        </TabList>
        <TabPanel><InsecureDataLoading></InsecureDataLoading></TabPanel>
        <TabPanel><SecureDataLoading></SecureDataLoading></TabPanel>
      </Tabs>
    </>
  );
}

export default ObjectPropertyLevelAuthorisationAttack;
