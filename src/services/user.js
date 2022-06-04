export async function updateUser(name, email) {
    let request = await fetch('api/v1/user/info', {
        method: 'POST',
        body: JSON.stringify({name: name, email: email}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const json = await request.json();

    return json
};

export async function getPolicy(){
    let request = await fetch('api/v1/user/policy', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })

    const json = await request.json()
    return json
}

export async function setPolicy(){
    let request = await fetch('api/v1/user/policy', {
        method: 'POST', 
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const json = await request.json();
    return json
}