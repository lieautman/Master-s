import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import InsecureDataLoading from './InsecureDataLoading';
import NotEnoughFieldValidations from './NotEnoughFieldValidations';

function ObjectPropertyLevelAuthorisationAttack() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <p>{`This attack is based on if the attacker has access to more data then intended.`}</p>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Lv.1 Insecure data loading</Tab>
          <Tab>Lv.2 Not enough field validations</Tab>
        </TabList>
        <TabPanel><InsecureDataLoading></InsecureDataLoading></TabPanel>
        <TabPanel><NotEnoughFieldValidations></NotEnoughFieldValidations></TabPanel>
      </Tabs>
    </>
  );
}

export default ObjectPropertyLevelAuthorisationAttack;
