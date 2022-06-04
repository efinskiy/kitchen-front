import React from 'react';
import BasketElement from './basket.element/basket.element';
import Payment from './basket.payment/payment';
import css from './basket.module.css';
import { getBasket } from '../../../services/basket';
import { createOrder } from '../../../services/order';
import { useState, useEffect } from 'react';
import { getCustomerInfo } from '../../../services/settings';

const Basket = (props) => {
    const {basket, fswitchProp} = props;
    const [fswitch, setfSwitch] = fswitchProp;
    const [basketState, setBasketState] = basket;
    const [paymentType, setPaymentType] = useState(false);
    const [customerEmail, setCustomerEmail] = useState(undefined);

    useEffect(() => {
        getCustomerInfo().then(json => {setCustomerEmail(json.email)})
    }, []);

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    return (
        <div className={css.order}>
            <h2 className={css.header}>Корзина</h2>
            {
                basketState.items.length === 0 ? <p>Пока что, тут пусто :(</p>
                : (
                    <div className="order_content">
                        {basketState.items.map(item => <BasketElement key={item.itemid} element = {item} basket={[basketState, setBasketState]}/> )}
                        <div className={css.total}>
                            <p>Сумма: {basketState.total}₽</p>
                        </div>
                        <hr className={css.hr} />

                        <div className={css.paymentSelect}>
                            <p>Способ оплаты: </p>
                            <Payment payment={[paymentType, setPaymentType]}/>
                        </div>
                        <hr className={css.hr} />
                        <div className={css.emailField}>
                            <p className={css.settingTitle}>Email</p>
                            <input className={css.dataInput} placeholder="Электронная почта" type='email' value={customerEmail} onChange={(event) => setCustomerEmail(event.target.value)}/> 
                        </div>
                        <hr className={css.hr} />
                        <div>
                            <div className={css.button}
                            onClick={
                                () => validateEmail(customerEmail) ? createOrder(paymentType).then(
                                    json => 
                                        json.response === 200 
                                        ? getBasket().then(basket => setBasketState(basket)).then(() => setfSwitch({menu: false, cart: false, user: {orders: true, profile: false, active: true}}))
                                        : false
                                ) : alert('Пожалуйста, заполните поле Email')
                            }
                            >
                                <p className={css.button_text}>Создать заказ</p>
                            </div>
                        </div>
                    </div>
                    )
            }
        </div>
    );
}

export default Basket;
