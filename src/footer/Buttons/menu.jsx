import { svg } from './menuSvg.jsx';
import css from './Buttons.module.css';
import classNames from 'classnames';
import { faList } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function Menu(props) {
    
    return (
        <button className={
            classNames(css.button, 
                    {[css.active]: props.isActive})}
                    onClick={
                        () => props.useState(
                        {menu: true, cart: false, history: false}
                        )}>
        <FontAwesomeIcon icon={faList} size="lg" color='black'/>
        </button>
    );
}