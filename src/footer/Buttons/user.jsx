import css from './Buttons.module.css';
import classNames from 'classnames';
import { faUser as icon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// {menu: false, cart: false, user: {orders: false, profile: false, active: true}}
export function User(props) {
    return (
        <button className={classNames(css.button, {[css.active]: props.isActive})} onClick={() => props.useState(!props.currentState)}>
            <FontAwesomeIcon icon={icon} size="lg" color='black'/>
        </button>
    )
}