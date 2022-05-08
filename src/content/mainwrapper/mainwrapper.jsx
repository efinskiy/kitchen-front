import React from 'react';
import { Offers } from '../offers/offers';
import Basket from '../popup/basket/basket';
import { getBasket } from '../../services/basket';
import css from './mainwrapper.module.css'
import { useEffect } from 'react';
 
const Mainwrapper = (props) => {
    const {fswitch, popup, basket} = props
    const [popupState, setPopupState] = popup
    const [basketState, setBasketState] = basket

    useEffect(
        () => {         
                getBasket().then(basket => setBasketState(basket))
        }, [fswitch]
    );

    return (
        <div className={css.style}>
            
            {
            fswitch.menu == true ? <Offers popup={[popupState, setPopupState]}/> :
            fswitch.cart == true ? <Basket basket={[basketState, setBasketState]}/> :
            fswitch.history == true ? <p>History</p> : false
            }

        </div>
    );
}

export default Mainwrapper;