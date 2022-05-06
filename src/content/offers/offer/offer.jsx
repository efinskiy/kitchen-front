import css from './offer.module.css'
import './offer.module.css'
import { addToBasket, getBasket } from '../../../services/basket';
import { Popup } from '../../popup/popup';
import { useState } from 'react';
// {props.data.name}
// {props.data.price}

export function Offer(props) {
    const {setBasket, popup} = props;
    const [popupState, setPopupState] = popup;
    return (
        <div>  
            <div className={css.card}>
                <div className={css.preview}>
                    <img src={props.data.img} alt="Product picture" className={css.img}/>
                    <div className={css.info}>
                        <div className={css.block}>

                            <p className={css.p_name}>{props.data.name}</p>
                            <p className={css.p_weight}>{props.data.weight} г.</p>

                        </div>
                    </div>
                    <div className={css.button}>
                        <p className={css.button_text} onClick={()=>setPopupState(1)}>Заказать за {props.data.price} ₽</p>
                    </div>
                    <div className={css.shadow}></div>
                </div>
            </div>
            
        </div>
    );
}

// ()=> {addToBasket(props.data.id).then(getBasket().then(basket => setBasket(basket)))}