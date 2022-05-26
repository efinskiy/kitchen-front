import React from 'react';
import { Offers } from '../offers/offers';
import Basket from '../popup/basket/basket';
import Orders from '../popup/orders/orders';
import { getBasket } from '../../services/basket';
import css from './mainwrapper.module.css'
import { useEffect, useState } from 'react';
import { getCategories } from '../../services/menu';
 
const Mainwrapper = (props) => {
    const {fswitchProp, popup, basket} = props
    const [fswitch, setfSwitch] = fswitchProp
    const [popupState, setPopupState] = popup
    const [basketState, setBasketState] = basket
    const [categoryState, setCategoryState] = useState({});
    // console.log(categoryState);
    useEffect(
        () => {         
                getBasket().then(basket => setBasketState(basket))
        }, [fswitch]
    );
    // useEffect(()=>{
    //     console.log(categoryState)
    // }, [categoryState])

    useEffect(
        () => {
            let newState = {};
            getCategories().then(json => {
                json.categories.map(el => {
                    newState[el.id] = {title: el.title, enabled: el.is_default}
                })
                })
            setCategoryState(newState);
        }, [fswitch]
    )

    return (
        categoryState === {} ? <p>Загрузка</p> : 
        <div className={css.style}>
            
            {
            fswitch.menu == true ? <Offers popup={[popupState, setPopupState]} category={[categoryState, setCategoryState]}/> :
            fswitch.cart == true ? <Basket basket={[basketState, setBasketState]} fswitchProp={fswitchProp}/> :
            fswitch.history == true ? <Orders fswitchProp={fswitchProp}/> : false
            }

        </div>
    );
}

export default Mainwrapper;
