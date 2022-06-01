import React from 'react';
import { Offers } from '../offers/offers';
import Basket from '../popup/basket/basket';
import Orders from '../popup/orders/orders';
import { getBasket } from '../../services/basket';
import css from './mainwrapper.module.css'
import { useEffect, useState } from 'react';
import { getCategories } from '../../services/menu';
import Settings from '../popup/settings/settings';
 
const Mainwrapper = (props) => {
    const {fswitchProp, popup, basket, category} = props
    const [fswitch, setfSwitch] = fswitchProp
    const [popupState, setPopupState] = popup
    const [basketState, setBasketState] = basket
    const [categoryState, setCategoryState] = category
    useEffect(
        () => {         
                getBasket().then(basket => setBasketState(basket))
        }, [fswitch]
    );


    return ( 
        <div className={css.style}>
            
            {
                fswitch.menu == true ? <Offers popup={[popupState, setPopupState]} category={[categoryState, setCategoryState]}/> :
                fswitch.cart == true ? <Basket basket={[basketState, setBasketState]} fswitchProp={fswitchProp}/> :
                fswitch.user.orders == true ? <Orders fswitchProp={fswitchProp}/> :
                fswitch.user.profile == true ? <Settings fswitchProp={fswitchProp}/> : false
                
            }

        </div>
    );
}

export default Mainwrapper;
