const getHeaders = {
    mode: 'no-cors',
    method: 'GET',
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    },
}

export async function getCustomerKey(){
    let request = await fetch('api/v1/user/recovery/get', getHeaders);
    let response = await request.json();
    
    return response 
}

export async function getCustomerInfo(){
    let request = await fetch('api/v1/user/info', getHeaders);
    let response = await request.json();
    
    return response 
}


export async function getKitchenStatus() {
    let response = await fetch('api/v1/status', getHeaders);
    let status = await response.json();

    return status;
}