import { useState } from 'react';
import { SQLInjectionFuncLevel3 } from '../../../Requests/index';


function InsecureLoginLevel3() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <>
            <p>
                {`To stop the previous attacks, we have to: filter the input given by the client. The server does this with the help of the database package in the "AddWithValue" procedure:`}
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
                <input type="button" value="Login" onClick={() => { SQLInjectionFuncLevel3(username, password) }} />
            </form>
            <p>
                {`destructive payload: { "id": 0, "username": "a", "password": "a' or 1=1--" } 
        can also talk about the damage that this sort of payload can do (remove the database)`}
            </p>
            <p>Backend code:</p>
            <pre>{`SqliteCommand cmd = new SqliteCommand("SELECT Password FROM Accounts where Username = @username and Password = @password", connection);
            cmd.Parameters.AddWithValue("@username", account.username);
            cmd.Parameters.AddWithValue("@password", account.password);`}</pre><br/>
        </>
    );
}

export default InsecureLoginLevel3;
