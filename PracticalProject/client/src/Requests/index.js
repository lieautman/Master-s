export const loginFuncLevelOne = (username, password) => {
    fetch('https://localhost:7234/Accounts', {
        method: "POST",
        headers: {
            Accept: "plain/text",
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 1, username: username, password: password })
    }).then(response => response.text())
        .then(data => console.log(data))
        .catch((err) => console.error(err));
}


export const getAccounts = () => {
    fetch('https://localhost:7234/Accounts', {
        headers: {
            Accept: "plain/text",
            "Content-Type": "application/json",
        },
    }).then(response => response.text())
        .then(data => console.log(data))
        .catch((err) => console.error(err));
}