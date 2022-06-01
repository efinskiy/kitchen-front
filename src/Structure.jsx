import { Footer } from "./footer/footer"
import { Header } from "./header/header"
import { Popup } from "./content/popup/product/popup";
import { useEffect, useState } from "react";
import { getBasket } from "./services/basket";
import { getKitchenStatus } from "./services/settings";
import Mainwrapper from "./content/mainwrapper/mainwrapper";
import Loader from "./content/loader/loader";
import Closed from "./content/closed/closed";
import { getCategories } from "./services/menu";


export function Structure(){ 
    const [basket, setBasket] = useState([])
    const [kitchenStatus, setKitchenStatus] = useState([])
    const [loadingStatus, setLoadingStatus] = useState(0)
    const [popupState, setPopupState] = useState({state: 0, product: {title: null, id: null, price: null, balance: null}})
    const [fswitch, setfSwitch] = useState({menu: true, cart: false, user: {orders: false, profile: false, active: false}})
    const [categoryState, setCategoryState] = useState();
    



    let newState = {};
    useEffect(
        () => {
            getKitchenStatus().then(status => setKitchenStatus(status.value));
            getCategories().then(json => {
                json.categories.map(el => {
                    newState[el.id] = {id: el.id, title: el.title, enabled: el.is_default};
                })
                })
            setCategoryState(newState);
        }, []
    )

    useEffect(
        () => {
            setLoadingStatus(1)
        }, [kitchenStatus, newState]
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
            <Mainwrapper popup={[popupState, setPopupState]} fswitchProp={[fswitch, setfSwitch]} basket={[basket, setBasket]} category={[categoryState, setCategoryState]}/>
            <Footer basket={basket} switchprops={[fswitch, setfSwitch]}/>
        </div>
    ) : kitchenStatus=='not_available' ? (
        <Closed/>
    ) : <Loader/>)
};