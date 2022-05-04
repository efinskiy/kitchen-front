import { svg } from "./historySvg"
import css from './Buttons.module.css';
import classNames from 'classnames';

export function History(props) {
    return (
        <button className={classNames(css.button, {[css.active]: props.isActive})} onClick={() => props.useState({menu: false, cart: false, history: true})}>{svg}</button>
    )
}