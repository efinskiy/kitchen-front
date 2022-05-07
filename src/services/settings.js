const getHeaders = {
    mode: 'no-cors',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
}

export async function getKitchenStatus() {
    const response = await fetch('api/v1/status', getHeaders);
    const status = await response.json();

    return status;
}