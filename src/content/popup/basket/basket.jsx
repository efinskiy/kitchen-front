import React from 'react';
import BasketElement from './basket.element/basket.element';
import css from './basket.module.css';

const Basket = (props) => {
    const {basket} = props;
    const [basketState, setBasketState] = basket;

    return (
        <div className={css.order}>
            <h2 className={css.header}>Корзина</h2>
            {
                basketState.items.length === 0 ? <p>Корзина пуста.</p>
                : basketState.items.map(item => <BasketElement key={item.itemid} element = {item} basket={[basketState, setBasketState]}/> )
            }
            
            <div>
                <p>Метод оплаты: <span>Наличные</span></p>
            </div>
            <div>
                <button>Создать заказ</button>
            </div>
        </div>
    );
}

export default Basket;
