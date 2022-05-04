const getHeaders = {
    mode: 'no-cors',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
}

export function getBasket() {
    return fetch('api/v1/basket', getHeaders)
      .then(data => data.json())
    }