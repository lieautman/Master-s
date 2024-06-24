import { useState } from 'react';
import { BufferOverflowLevel1 } from '../../../Requests/index';

function InsecureInputLevel1() {
  let [name, setName] = useState('');
  let [returnValue, setReturnValue] = useState();
  return (
    <>
      <p>
        {`Underneath, there is a vulnerable form that can be exploited with Buffer overflow by being sent to a c++ application:`}
      </p>
      <form>
        <label>
          Name:
          <input type="text" onChange={(event) => setName(event.target.value)} />
        </label>
        <input type="button" value="Send" onClick={() => { BufferOverflowLevel1(setReturnValue,name) }} />
      </form>
      <p>
        {`The returned value sould always be 1 and the backend console will display "Hello {your input}!"`}
      </p>
      <p>{`Return value is: ` + returnValue}</p>
      <p>
        {`The input: "zzzzzzzzzzzzzzzzz" can be used for the application to throw the wrong output (returns 1), by overwriting the isAdmin variable. The return value of 1 should never be reached according to the code.`}
      </p>
      <p>
        {`The application code:`}
      </p>
      <pre>{`char input[10];
int isAdmin = 0;

strcpy(input, argv[1]);
printf("isAdmin:%d'", isAdmin);

if (isAdmin) {
	printf("Hello admin!");
	return 1;
}
else {
	printf("Hello %s!", input);
	return 0;
}`}</pre><br />
    </>
  );
}

export default InsecureInputLevel1;
