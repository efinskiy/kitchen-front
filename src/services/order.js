export async function createOrder(ptype){
    const request = await fetch('api/v1/order', {
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
    const request = await fetch('api/v1/orders', {
        method: "GET",
        headers: {
            'Content-Type': 'application/json',
        }
    })
    const json = await request.json()

    return json;
}