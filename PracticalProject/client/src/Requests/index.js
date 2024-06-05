import { toast } from 'react-toastify';

export const getListOfLanguages = (setListOfLanguages) => {
    fetch('https://localhost:7234/ListOfLanguages', {
        headers: {
            Accept: "plain/text",
            "Content-Type": "application/json",
        },
    }).then(response => response.json())
        .then(data => setListOfLanguages(data))
        .catch((err) => console.error(err));
}

export const getListOfTags = (setListOfTags) => {
    fetch('https://localhost:7234/ListOfTags', {
        headers: {
            Accept: "plain/text",
            "Content-Type": "application/json",
        },
    }).then(response => response.json())
        .then(data => setListOfTags(data))
        .catch((err) => console.error(err));
}

export const getListOfLanguagesWithTags = (setListOfLanguagesWithTags) => {
    fetch('https://localhost:7234/ListOfLanguagesWithTags', {
        headers: {
            Accept: "plain/text",
            "Content-Type": "application/json",
        },
    }).then(response => response.json())
        .then(data => setListOfLanguagesWithTags(data))
        .catch((err) => console.error(err));
}

export const getListOfTopics = (setListOfTopics, languageWithTag) => {
    fetch('https://localhost:7234/ListOfTopics/'+JSON.stringify(languageWithTag), {
        headers: {
            Accept: "plain/text",
            "Content-Type": "application/json",
        },
    }).then(response => response.json())
        .then(data => setListOfTopics(data))
        .catch((err) => console.error(err));
}

//SQLInjection
export const SQLInjectionFuncLevel1 = (username, password) => {
    fetch('https://localhost:7234/SqlInjection/Level1', {
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

export const SQLInjectionFuncLevel2 = (username, password) => {
    fetch('https://localhost:7234/SqlInjection/Level2', {
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

export const SQLInjectionFuncLevel3 = (username, password) => {
    fetch('https://localhost:7234/SqlInjection/Level3', {
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

//ObjectPropertyLevelAuthorisationAttack
export const ObjectPropertyLevelAuthorisationAttackLevel1 = (setProducst) => {
    fetch('https://localhost:7234/ObjectPropertyLevelAuthorisationAttack/Level1', {
        method: "GET",
    }).then(response => response.json())
        .then(data => {
            setProducst(data)
            console.log(data)
        })
        .catch((err) => console.error(err));
}
export const ObjectPropertyLevelAuthorisationAttackLevel2 = (setProducst) => {
    fetch('https://localhost:7234/ObjectPropertyLevelAuthorisationAttack/Level2', {
        method: "GET",
    }).then(response => response.json())
        .then(data => {
            setProducst(data)
            console.log(data)
        })
        .catch((err) => console.error(err));
}

//ServerSideRequestForgery
export const ServerSideRequestForgeryLevel1 = (setData, fileName) => {
    fetch(`https://localhost:7234/ServerSideRequestForgery/Level1/${fileName}`, {
        method: "GET",
    }).then(response => response.json())
        .then(data => {
            setData(data.fileContent)
        })
        .catch((err) => console.error(err));
}

export const ServerSideRequestForgeryLevel2 = (setData, fileName) => {
    fetch(`https://localhost:7234/ServerSideRequestForgery/Level2/${fileName}`, {
        method: "GET",
    }).then(response => response.json())
        .then(data => {
            setData(data.fileContent)
        })
        .catch((err) => console.error(err));
}