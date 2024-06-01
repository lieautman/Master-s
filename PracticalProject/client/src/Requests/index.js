import { toast } from 'react-toastify';

export const getListOfSubjects = (setListOfSubjects) => {
    fetch('https://localhost:7234/ListOfLanguages', {
        headers: {
            Accept: "plain/text",
            "Content-Type": "application/json",
        },
    }).then(response => response.json())
        .then(data => setListOfSubjects(data))
        .catch((err) => console.error(err));
}

export const loginFuncLevel1 = (username, password) => {
    fetch('https://localhost:7234/Accounts/SignInLv1', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 1, username: username, password: password })
    }).then(response => response.json())
        .then(data => {
            if (data.value === true)
                toast("Login Succesfull");
            else
                toast("Login Unuccesfull");
        })
        .catch((err) => console.error(err));
}

export const loginFuncLevel2 = (username, password) => {
    fetch('https://localhost:7234/Accounts/SignInLv2', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 1, username: username, password: password })
    }).then(response => response.text())
        .then(data => {
            if (data.value === true)
                toast("Login Succesfull");
            else
                toast("Login Unuccesfull");
        })
        .catch((err) => console.error(err));
}

export const loginFuncLevel3 = (username, password) => {
    fetch('https://localhost:7234/Accounts/SignInLv3', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: 1, username: username, password: password })
    }).then(response => response.text())
        .then(data => {
            if (data.value === true)
                toast("Login Succesfull");
            else
                toast("Login Unuccesfull");
        })
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