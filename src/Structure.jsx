import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { Popup } from "./content/popup/product/popup";
import { useEffect, useState } from "react";
import { getBasket } from "./services/basket";
import { getKitchenStatus } from "./services/settings";
import Mainwrapper from "./content/mainwrapper/mainwrapper";
import Loader from "./content/loader/loader";
import Closed from "./content/closed/closed";


export function Structure(props){ 
    const [basket, setBasket] = useState([])
    const [kitchenStatus, setKitchenStatus] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(0)
    const [popupState, setPopupState] = useState({state: 0, product: {title: null, id: null, price: null, balance: null}})
    const [fswitch, setfSwitch] = useState({menu: true, cart: false, history: false})


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
        }, []
    );
    useEffect(
        () => {
            if (popupState.state == 0){
                getBasket().then(basket => setBasket(basket))

            }
        }, [popupState]
    );

    return (
    loadingStatus == 0 ? (
        <div>
            <Loader/>
        </div>
    ) : kitchenStatus=='available' ? (
        <div>
            <Header/>
            <Popup state={[popupState, setPopupState]} basket={[basket, setBasket]} />
            <Mainwrapper popup={[popupState, setPopupState]} fswitchProp={[fswitch, setfSwitch]} basket={[basket, setBasket]}/>
            <Footer basket={basket} switchprops={[fswitch, setfSwitch]}/>
        </div>
    ) : kitchenStatus=='not_available' ? (
        <Closed/>
    ) : <Loader/>)
};