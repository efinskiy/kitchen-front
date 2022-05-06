import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { Offers } from "./content/offers/offers";
import { Popup } from "./content/popup/popup";
import { useEffect, useState } from "react";
import { getBasket } from "./services/basket";
import { getKitchenStatus } from "./services/settings";


export function Structure(props){ 
    const [basket, setBasket] = useState([])
    const [kitchenStatus, setKitchenStatus] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(0)
    const [popupState, setPopupState] = useState({state: 0, product: {title: null, id: null, price: null, balance: null}})

    useEffect(
        () => {
            getKitchenStatus().then(status => setKitchenStatus(status.value))
        }, []
    )

    useEffect(
        () => {
            setLoadingStatus(1)
        }, [kitchenStatus]
    );

    useEffect(
        () => {
            if (kitchenStatus=='available'){
                getBasket().then(basket => setBasket(basket))
            }
        }, [kitchenStatus]
    );

    return (
    loadingStatus == 0 ? (
        <div>
            <p>Loading...</p>
        </div>
    ) : kitchenStatus=='available' ? (
        <div>
            <Header/>
            <Popup state={[popupState, setPopupState]}/>
            <Offers setBasket={setBasket} popup={[popupState, setPopupState]}/>
            <Footer basket={basket}/>
        </div>
    ) : (
        <div>
            <p>Kitchen not available</p>
        </div>
    ))
};