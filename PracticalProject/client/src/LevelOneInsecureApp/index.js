import { useState } from 'react';
import { loginFuncLevelOne } from '../Requests/index';


function InsecureLoginLevelOne() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  return (
    <>
      <form>
        <label>
          Username:
          <input type="text" onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          Password:
          <input type="password" onChange={(event) => setPassword(event.target.value)} />
        </label>
        <input type="button" value="Login" onClick={() => { loginFuncLevelOne(username, password) }} />
      </form>
      <p>
        {`destructive payload: { "id": 0, "username": "a", "password": "a' or 1=1--" } 
        can also talk about the damage that this sort of payload can do (remove the database)`}
      </p>
      <p>{`Backend code:`}</p>
    </>
  );
}

export default InsecureLoginLevelOne;
