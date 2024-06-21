import { useState } from 'react';
import { BufferOverflowLevel1 } from '../../../Requests/index';

function InsecureInputLevel1() {
  let [name, setName] = useState('');
  let [returnValue, setReturnValue] = useState();
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
        <input type="button" value="Login" onClick={() => { BufferOverflowLevel1(setReturnValue,name) }} />
      </form>
      <p>{`Return value is: ` + returnValue}</p>
      <p>
        {`The input: "zzzzzzzzzzzzzzzzz" can be used for the application to throw the wrong output, by overwriting the isAdmin variable. The return value of 1 should never be reached according to the code.`}
      </p>
    </>
  );
}

export default InsecureInputLevel1;
