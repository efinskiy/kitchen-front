import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { Offers } from "./content/offers/offers";
import { useEffect, useState } from "react";
import { getBasket } from "./services/basket";
import { getKitchenStatus } from "./services/settings";


export function Structure(props){ 
    const [basket, setBasket] = useState([])
    const [kitchenStatus, setKitchenStatus] = useState([])

    useEffect(
        () => {
            getKitchenStatus().then(status => setKitchenStatus(status.value))
        }
    )

    useEffect(
        () => {
            getBasket().then(basket => setBasket(basket))
        }, []
    );

    return kitchenStatus=='available'
    ? 
    (
    <div>
        <Header/>
        <button onClick={() => setBasket(el => el.map(someI => ({ ...someI, len: someI.len++ })))} />
        <Offers/>
        <Footer basket={basket}/>
    </div>
    )
    : 
    (
    <div>
        <p>Kitchen not available</p>
    </div>
    )
};