import css from './Buttons.module.css';
import classNames from 'classnames';

export function Cart(props) {
    return (
        <div onClick={() => props.useState({menu: false, cart: true, history: false})}>
        <button className={classNames(css.cartButton, {[css.active]: props.isActive})}>{props.basket.total} ₽</button>
        <span className={css.cartQuantity}>x{props.basket.len}</span>
        </div>
    );
}