import React from 'react';
import BasketElement from './basket.element/basket.element';
import css from './basket.module.css';

const Basket = (props) => {
    const {basket} = props;
    const [basketState, setBasketState] = basket;

    return (
        <div className={css.order}>
            <h2>Заказ</h2>
            {basketState.items.map(item => <BasketElement key={item.itemid} element = {item}/> )}
        </div>
    );
}

export default Basket;
