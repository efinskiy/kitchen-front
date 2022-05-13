export async function createOrder(ptype){
    let request = await fetch('api/v1/order', {
        method: 'POST',
        body: JSON.stringify({
            ptype: ptype
        }),
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const json = await request.json();

    if (json.response === 200){
        return json;
    }
    else{
        alert("Что то пошло не так :(");
        console.log(json);
    }

}

export async function getOrders(){
    let request = await fetch('api/v1/orders', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const json = await request.json()

    return json;
}

export async function getPayLink(id){
    let request = await fetch('api/v1/order/pay?'+ new URLSearchParams({
        oid: id
    }));

    const json = await request.json()

    return json
}

export async function cancelOrder(id){
    let request = await fetch('api/v1/order/cancel', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            oid: id
        })    
    })
    const json = await request.json()

    return json
}