import { useState } from 'react';

function CorsAttack() {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <p>{"Threat description:"}</p>
      <p>{`A Cors attack involves a server trusting requests from a compormosed target. The target can be used to send malicios requests to the server.`}</p>
      <p>{`The attack is as simple as sending a user a link that when clicked runs a script that copromises information.`}</p>
      <p>{`The fix for this issue is propper configuration of cors origin. The backend of this application allows calls from the frontend like so: `}</p>
      <pre>{`builder.Services.AddCors(options =>
{
    options.AddPolicy(name: MyAllowSpecificOrigins,
                      policy =>
                      {
                          policy.WithOrigins("http://localhost:3000")
                          .AllowAnyHeader()
                          .AllowAnyMethod(); ;
                      });
});`}</pre>
    </>
  );
}

export default CorsAttack;
