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


export async function addToBasket(id, q) {
    let request = await fetch('api/v1/basket', {
        method: 'POST',
        body: JSON.stringify({p: id, amount: q}),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    const json = await request.json();

    if (json.response == 201){
        alert("Недостаточно товара")
    }
    return json
};

export async function removeItem(id){
    let request = await fetch('api/v1/basket', {
        method: 'PATCH',
        body: JSON.stringify({
            p: id
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    });

    const json = await request.json();

    return json

}

export async function getBalance(id){
    let request = await fetch('api/v1/basket/amount', {
        method: 'POST',
        body: JSON.stringify({
            p: id
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })

    const json = await request.json();

    return json
}