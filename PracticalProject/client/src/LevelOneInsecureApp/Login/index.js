import { useState } from 'react';

function Login() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  const loginFunc = () => {
    fetch('https://localhost:7234/Accounts', {
      //method: "post",
      headers: {
        Accept: "plain/text",
        "Content-Type": "application/json",
      },
      //body: JSON.stringify(ob)
    }).then(response => response.text())
      .then(data => console.log(data))
      .catch((err) => console.error(err));
  }

  return (
    <form>
      <label>
        Username:
        <input type="text" onChange={(event) => setUsername(event.target.value)} />
      </label>
      <label>
        Password:
        <input type="password" onChange={(event) => setPassword(event.target.value)} />
      </label>
      <input type="button" value="Login" onClick={() => { loginFunc() }} />
    </form>
  );
}

export default Login;
