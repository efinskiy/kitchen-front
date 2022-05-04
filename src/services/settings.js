const getHeaders = {
    mode: 'no-cors',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
}

export function getKitchenStatus() {
return fetch('api/v1/status', getHeaders)
    .then(data => data.json())
}