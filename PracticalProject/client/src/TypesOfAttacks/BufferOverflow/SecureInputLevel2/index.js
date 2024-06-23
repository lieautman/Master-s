import { useState } from 'react';
import { BufferOverflowLevel2 } from '../../../Requests/index';

function SecureInputLevel2() {
  let [name, setName] = useState('');
  let [returnValue, setReturnValue] = useState();
  return (
    <>
      <p>
        {`The application has been patched. It limits the input to a size of 10, with the use of strncpy function.`}
      </p>
      <form>
        <label>
          Name:
          <input type="text" onChange={(event) => setName(event.target.value)} />
        </label>
        <input type="button" value="Send" onClick={() => { BufferOverflowLevel2(setReturnValue,name) }} />
      </form>
      <p>
        {`The returned value sould always be 1 and the backedn console will display "Hello {your input}!"`}
      </p>
      <p>{`Return value is: ` + returnValue}</p>
    </>
  );
}


export default SecureInputLevel2;
