import css from './Buttons.module.css';
import classNames from 'classnames';
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Menu(props) {
    
    return (
        <button className={
            classNames(css.button, 
                    {[css.active]: props.isActive})}
                    onClick={
                        () => props.useState(
                        {menu: true, cart: false, user: {orders: false, profile: false, active: false}}
                        )}>
        <FontAwesomeIcon icon={faBars} size="lg" color='black'/>
        </button>
    );
}