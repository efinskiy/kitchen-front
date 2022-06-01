import React from 'react';
import css from './Buttons.module.css';
import classNames from 'classnames';
import { faListCheck as icon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Orders = (props) => {
    return (
        <div className={css.buttonWrapper}>
            <button className={
                classNames(css.button, 
                        {[css.active]: props.isActive})}
                        onClick={
                            () => props.useState(
                            {menu: false, cart: false, user: {orders: true, profile: false, active: true}}
                            )}>
            <FontAwesomeIcon icon={icon} size="lg" color='black'/>
            </button>
            <span className={css.buttonTitle}>Мои заказы</span>
        </div>
    );
}

export default Orders;
