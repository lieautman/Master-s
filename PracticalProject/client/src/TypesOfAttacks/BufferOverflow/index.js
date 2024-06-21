import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import { Button } from '@mui/material';
import InsecureInputLevel1 from "./InsecureInputLevel1"
import SecureInputLevel2 from "./SecureInputLevel2"

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
          <Tab>Lv.1 Insecure input</Tab>
          <Tab>Lv.2 Secure input</Tab>
        </TabList>
        <TabPanel><InsecureInputLevel1></InsecureInputLevel1></TabPanel>
        <TabPanel><SecureInputLevel2></SecureInputLevel2></TabPanel>
      </Tabs>
    </>
  );
}

export default SQLInjections;
