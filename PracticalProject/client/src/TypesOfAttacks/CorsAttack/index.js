import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { useState } from 'react';

function CorsAttack() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <p>{"Threat description:"}</p>
      <p>{`A Cors attack involves a server trusting requests from a compormosed target. The target can be used to send malicios requests to the server.`}</p>
    </>
  );
}

export default CorsAttack;
