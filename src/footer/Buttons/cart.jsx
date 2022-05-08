import css from './Buttons.module.css';
import classNames from 'classnames';
import { faBasketShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Cart(props) {
    return (
        <div onClick={() => props.useState({menu: false, cart: true, history: false})}>
        <button className={classNames(css.cartButton, {[css.active]: props.isActive})}>
        <FontAwesomeIcon icon={faBasketShopping} size="2x" color='black'/>
        </button>
        <span className={css.cartQuantity}>x{props.basket.len}</span>
        </div>
    );
}