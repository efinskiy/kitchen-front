import React from 'react';
import css from './Buttons.module.css';
import classNames from 'classnames';
import { faGear as icon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Settings = (props) => {
    return (
        <div className={css.buttonWrapper}>
            <button className={
                classNames(css.button, 
                        {[css.active]: props.isActive})}
                        onClick={
                            () => props.useState(
                            {menu: false, cart: false, user: {orders: false, profile: true, active: true}}
                            )}>
            <FontAwesomeIcon icon={icon} size="lg" color='black'/>
            </button>
            <span className={css.buttonTitle}>Настройки</span>
        </div>
    );
}

export default Settings;
