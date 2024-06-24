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
        <input type="button" value="Send" onClick={() => { BufferOverflowLevel2(setReturnValue, name) }} />
      </form>
      <p>
        {`The returned value sould always be 1 and the backend console will display "Hello {your input}!"`}
      </p>
      <p>{`Return value is: ` + returnValue}</p>
      <p>
        {`The application code:`}
      </p>
      <pre>{`	char input[10]{};
        int isAdmin = 0;

        strncpy(input, argv[1],9);
        printf("isAdmin:%d", isAdmin);

        if (isAdmin) {
              printf("Hello admin!");
          return 1;
        }
        else {
              printf("Hello %s!", input);
          return 0;
        }
      }`}</pre><br />
    </>
  );
}


export default SecureInputLevel2;
