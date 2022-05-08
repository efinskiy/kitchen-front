import React from 'react';
import css from './order.module.css';
import Product from './product/product';
import { faMoneyBill1Wave, faCreditCard } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Order = (props) => {
    const {order} = props;

    return (
        <div className={css.order}>
            <div className={css.order_info}>
                <div className={css.info_top}>
                    <div className={css.info_main}>
                    <h3>
                        Заказ №{order.id}
                    </h3>
                    <span className={css.order_status}>
                        {
                        order.status === 0 
                            ? <span className={css.statusWaitPayment}>Ожидает оплаты</span>
                            : order.status === 1 
                                ? <span className={css.statusWaitConfirmation}>Подтверждение</span>
                                : order.status === 2 
                                    ? <span className={css.statusReady}>Ожидает вручения</span>
                                    : order.status === 3
                                        ? <span className={css.statusFinal}>Выдан</span>
                                        : order.status === 4
                                            ? <span className={css.statusCanceled}>Отменен</span>
                                            : false
                        }
                    </span>
                    </div>
                    <span className={css.info_date}>{order.date}</span>
                    {
                        order.status === 2 
                                        ? <span>PIN: {order.confirmation_code}</span>
                                        : false
                    }
                </div>
            </div>
            <div className={css.itemsList}>
                {order.items.map(item => <Product key={item.id} item={item}/>)}
            </div>
            <p>Способ оплаты: {order.payment_type === 0 ? <span className={css.total}>Наличными <FontAwesomeIcon icon={faMoneyBill1Wave}/></span> : <span className={css.total}>Картой <FontAwesomeIcon icon={faCreditCard}/></span>}</p>
            <p>Сумма: <span className={css.total}>{order.ord_price.toFixed(2)}₽</span></p>
            <div className={css.controlButtons}>
                {
                    order.status !== 4 && order.status !== 3
                                                        ? <div className={css.btnCancel}> <p className={css.button_text}>Отменить</p> </div>
                                                        : false
                }
                {
                    order.is_payed === false && order.status < 1  
                                        ? <div className={css.btnPay}> <p className={css.button_text}>Оплатить</p> </div>
                                        : false
                }
                
            </div>
            <hr className={css.hr}/>
        </div>
    );
}

export default Order;
