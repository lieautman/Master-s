import { useState } from 'react';
import { loginFuncLevel2 } from '../../../Requests/index';


function InsecureLoginLevel2() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <>
            <p>
                {`To solve the issue from level1, one may think that a library may help,
                 but the same problem can happen if instead of inputing through the library, we do it through strings.`}
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
                <input type="button" value="Login" onClick={() => { loginFuncLevel2(username, password) }} />
            </form>
            <p>
                {`destructive payload: { "id": 0, "username": "a", "password": "a' or 1=1--" } 
                can also talk about the damage that this sort of payload can do (remove the database)`}
            </p>
            <p>Backend code:</p>
            <code>SqliteCommand cmd = new SqliteCommand("SELECT Password FROM Accounts where Username = '" + account.username + "' and Password = '" + account.password + "'", connection);</code><br />
        </>
    );
}

export default InsecureLoginLevel2;
