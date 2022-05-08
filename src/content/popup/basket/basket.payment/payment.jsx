import React from 'react';
import css from './payment.module.css';
import { useState } from 'react';

const Payment = (props) => {
    const {payment} = props;
    const [paymentType, setPaymentType] = payment;


    return (
        <div className={css.paymentType} >
            <div className={css.paymentTypeSwitch}>
                <input type="checkbox" checked={paymentType} onChange={(event) => {setPaymentType(event.target.checked)}} className={css.checkbox} />
                <div className={css.knobs}>
                    <span>Наличные</span>
                </div>
                <div className={css.layer}></div>
            </div>
        </div>
    );
}

export default Payment;
