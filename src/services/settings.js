const getHeaders = {
    mode: 'no-cors',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
}

export async function getKitchenStatus() {
return await fetch('api/v1/status', getHeaders)
    .then(data => data.json())
}