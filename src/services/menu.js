const getHeaders = {
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
}

export function getMenu() {
    return fetch('api/v1/menu', getHeaders)
      .then(data => data.json())
    }