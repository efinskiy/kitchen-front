const getHeaders = {
        mode: 'no-cors',
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=utf-8'
        },
}

export async function getMenu(id) {

    let request = await fetch('api/v1/menu', {
        method: 'POST',
        body: JSON.stringify({
            id: id
        }),
        headers: {
            'Content-Type': 'application/json',
        }});

    let response = await request.json()
    return response;
};

export async function getCategories(){
    let request = await fetch('api/v1/category', getHeaders)
    
    let response = await request.json()
    console.log(response);
    return response

}