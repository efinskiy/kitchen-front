import { svg } from './menuSvg.jsx';
import css from './Buttons.module.css';
import classNames from 'classnames';

export function Menu(props) {
    
    return (
        <button className={
            classNames(css.button, 
                    {[css.active]: props.isActive})}
                    onClick={
                        () => props.useState(
                        {menu: true, cart: false, history: false}
                        )}>
        {svg}
        </button>
    );
}