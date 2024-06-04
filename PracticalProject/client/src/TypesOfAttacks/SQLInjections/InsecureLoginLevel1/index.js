import { useState } from 'react';
import { loginFuncLevel1 } from '../../../Requests/index';


function InsecureLoginLevel1() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  return (
    <>
      <p>
        {`Underneath, there is a vulnerable form that can be exploited with SQL injection:`}
      </p>
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
        {`The distructive payload can be used in postman or as input for each field in the form.`}
      </p>
      <p>
        {`Destructive payload: { "id": 0, "username": "a", "password": "a' or 1=1--" }`}
      </p>
      <p>{`Backend code: SQLInjectionController.cs -> Level1`}</p>
      <code>command.CommandText = "SELECT Password FROM Accounts where Username = '" + account.username + "' and Password = '" + account.password + "'";</code><br />
    </>
  );
}

export default InsecureLoginLevel1;
