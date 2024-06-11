import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import InsecureLoginLevel1 from './InsecureLoginLevel1';
import InsecureLoginLevel2 from './InsecureLoginLevel2';
import InsecureLoginLevel3 from './InsecureLoginLevel3';
import InsecureLoginLevel4 from './InsecureLoginLevel4';
import { Button } from '@mui/material';


function SQLInjections() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <p>{"Threat description:"}</p>
      <p>{`The SQL injection is one of the most basic security issues an application may have.
      It is caused by impropper checks of the requests given to an API server, which cause impropper database queries.`}</p>
      <p>{`Postmand website link: `} <a href='https://www.postman.com/' target="_blank" rel="noreferrer" >{`Postman website`}</a></p>
      <p>{`Postman import file: `} <Button variant="contained" href="SQL_injections_postman.json" download="SQL_injections_postman.json"> {` Download postman file`} </Button></p>
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
        <TabPanel><InsecureLoginLevel4></InsecureLoginLevel4></TabPanel>
      </Tabs>
    </>
  );
}

export default SQLInjections;
