import { useState } from 'react';
import { loginFuncLevel1 } from '../Requests/index';


function InsecureLoginLevel1() {
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
        <input type="button" value="Login" onClick={() => { loginFuncLevel1(username, password) }} />
      </form>
      <p>
        {`destructive payload: { "id": 0, "username": "a", "password": "a' or 1=1--" } 
        can also talk about the damage that this sort of payload can do (remove the database)`}
      </p>
      <p>Backend code:</p>
      <code>command.CommandText = "SELECT Password FROM Accounts where Username = '" + account.username + "' and Password = '" + account.password + "'";</code><br/>
    </>
  );
}

export default InsecureLoginLevel1;
