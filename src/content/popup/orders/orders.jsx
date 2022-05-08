import React from 'react';
import { useState, useEffect } from 'react';
import css from './orders.module.css';
import { getOrders } from '../../../services/order';
import Order from './order/order'

const Orders = (props) => {
    const {fswitchProp} = props;
    const [fswitch, setfSwitch] = fswitchProp;
    const [ordersState, setOrdersState] = useState({orders: []});

    useEffect(
        () => {
            getOrders().then(json => setOrdersState(json))
        }, []
    )
    // console.log(ordersState);

    return (
        <div className={css.orderHistory}>
            <h2 className={css.header}>Заказы</h2>
            {
                ordersState.orders.length === 0 ? 
                    <p>История заказов пуста</p>
                : 
                    ordersState.orders.map(order => <Order key={order.id} order={order}/>)
            }
            
        </div>
    );
}

export default Orders;
