import { useState } from 'react';
import { loginFuncLevel3 } from '../Requests/index';

function InsecureLoginLevel4() {
    let [username, setUsername] = useState('');
    let [password, setPassword] = useState('');

    return (
        <>
            <p>
                {`To stop the previous attacks, we have to: filter the input given by the client. The server does this with the help of the database package in the "AddWithValue" procedure`}
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
                <input type="button" value="Login" onClick={() => { loginFuncLevel3(username, password) }} />
            </form>
        </>
    );
}

export default InsecureLoginLevel4;
