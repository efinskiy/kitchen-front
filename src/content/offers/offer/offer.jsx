import css from './offer.module.css'
import './offer.module.css'
import { addToBasket, getBasket } from '../../../services/basket';
import { Popup } from '../../popup/popup';
import { useState } from 'react';
// {props.data.name}
// {props.data.price}

export function Offer(props) {
    const {setBasket, popup, data} = props;
    const [popupState, setPopupState] = popup;
    return (
        <div>  
            <div className={css.card}>
                <div className={css.preview}>
                    <img src={data.img} alt="Product picture" className={css.img}/>
                    <div className={css.info}>
                        <div className={css.block}>

                            <p className={css.p_name}>{data.name}</p>
                            <p className={css.p_weight}>{data.weight} г.</p>

                        </div>
                    </div>
                    <div className={css.button}>
                        <p className={css.button_text} onClick={() => setPopupState({state: 1, product: data})}>Заказать за {data.price} ₽</p>
                    </div>
                    <div className={css.shadow}></div>
                </div>
            </div>
            
        </div>
    );
}

// ()=> {addToBasket(props.data.id).then(getBasket().then(basket => setBasket(basket)))}