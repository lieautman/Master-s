import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';
import InsecureRequest from "./InsecureRequest"
import SecureRequest from "./SecureRequest"
import { Button } from '@mui/material';


function ServerSideRequestForgery() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <p>{"Threat description:"}</p>
      <p>{`The Server side request forgery allows an attacker to make requests as the API server to resources.
       This can be dangerous becaause this may lead to the site malfunctioning.`}</p>
      <p>{`Postmand website link: `} <a href='https://www.postman.com/' target="_blank" rel="noreferrer" >{`Postman website`}</a></p>
      <p>{`Postman import file: `} <Button variant="contained" href="server_side_request_forgery.json" download="server_side_request_forgery.json"> {` Download postman file`} </Button></p>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}></Tabs>
      <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <TabList>
          <Tab>Lv.1 Insecure Request</Tab>
          <Tab>Lv.2 Secure Request</Tab>
        </TabList>
        <TabPanel><InsecureRequest></InsecureRequest></TabPanel>
        <TabPanel><SecureRequest></SecureRequest></TabPanel>
      </Tabs>
    </>
  );
}

export default ServerSideRequestForgery;
