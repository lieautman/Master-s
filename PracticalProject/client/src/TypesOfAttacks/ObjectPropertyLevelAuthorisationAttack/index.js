import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import InsecureDataLoading from './InsecureDataLoading';
import SecureDataLoading from './SecureDataLoading';
import { Button } from '@mui/material';

function ObjectPropertyLevelAuthorisationAttack() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <p>{"Threat description:"}</p>
      <p>{`This attack is based on if the attacker has access to more data then intended.`}</p>
      <p>{`Postmand website link: `} <a href='https://www.postman.com/' target="_blank" rel="noreferrer" >{`Postman website`}</a></p>
      <p>{`Postman import file: `} <Button variant="contained" href="object_property_level_authorisation_postman.json" download="object_property_level_authorisation_postman.json"> {` Download postman file`} </Button></p>

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
