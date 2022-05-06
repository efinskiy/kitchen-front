const getHeaders = {
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
}
export async function getBasket() {
    return await fetch('api/v1/basket', getHeaders)
      .then(data => data.json())
};


export async function addToBasket(id) {
    let json = await fetch('api/v1/basket', {
        method: 'POST',
        body: JSON.stringify({p: id, amount: 1}),
        headers: {
            'Content-Type': 'application/json',
        },
    }).then(data=> data.json())
    if (json.response == 201){
        alert("Недостаточно товара")
    }
    return json
};


