import { svg } from "./historySvg"
import css from './Buttons.module.css';
import classNames from 'classnames';
import { faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export function History(props) {
    return (
        <button className={classNames(css.button, {[css.active]: props.isActive})} onClick={() => props.useState({menu: false, cart: false, history: true})}>
            <FontAwesomeIcon icon={faListCheck} size="lg" color='black'/>
        </button>
    )
}