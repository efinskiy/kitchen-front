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