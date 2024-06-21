import { useState } from 'react';
import { BufferOverflowLevel1 } from '../../../Requests/index';

function InsecureInputLevel1() {
  let [name, setName] = useState('');

  return (
    <>
      <p>
        {`Underneath, there is a vulnerable form that can be exploited with Buffer overflow being sent to a c++ application:`}
      </p>
      <form>
        <label>
          Name:
          <input type="text" onChange={(event) => setName(event.target.value)} />
        </label>
        <input type="button" value="Login" onClick={() => { BufferOverflowLevel1(()=>{},name) }} />
      </form>
      <p>
        {`The input: "zzzzzzzzzzzzzzzzz" can be used for the application to throw the wrong output, by overwriting the isAdmin variable`}
      </p>
    </>
  );
}

export default InsecureInputLevel1;
