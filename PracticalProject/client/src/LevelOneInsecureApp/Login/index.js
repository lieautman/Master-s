import { useState } from 'react';

function Login() {
  let [username, setUsername] = useState('');
  let [password, setPassword] = useState('');

  const loginFunc = () => {
    try {
      fetch('https://localhost:7234/Accounts', {
        //method: "post",
        headers: {
          "accept": "text/plain"
        },
        //body: JSON.stringify(ob)
      }).then(response => console.log(response))
    }
    catch (error) { console.error(error) };
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
