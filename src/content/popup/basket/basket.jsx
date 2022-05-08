import React from 'react';
import BasketElement from './basket.element/basket.element';
import Payment from './basket.payment/payment';
import css from './basket.module.css';
import { useState } from 'react';

const Basket = (props) => {
    const {basket} = props;
    const [basketState, setBasketState] = basket;
    const [paymentType, setPaymentType] = useState(false);

    return (
        <div className={css.order}>
            <h2 className={css.header}>Корзина</h2>
            {
                basketState.items.length === 0 ? <p>Корзина пуста.</p>
                : basketState.items.map(item => <BasketElement key={item.itemid} element = {item} basket={[basketState, setBasketState]}/> )
            }
            
            <div className={css.paymentSelect}>
                <p>Способ оплаты: </p>
                <Payment payment={[paymentType, setPaymentType]}/>
            </div>
            <div>
                <button>Создать заказ</button>
            </div>
        </div>
    );
}

export default Basket;
