import { Menu } from "./Buttons/menu";
import { History } from "./Buttons/history";
import { Cart } from "./Buttons/cart";
import css from './footer.module.css';
import { useState } from "react";


export function Footer(props) {
    const [fswitch, setfSwitch] = useState({menu: true, cart: false, history: false})
    const {basket} = props
    return (
        <footer className={css.footer}>
            <ul className={css.ul}>
                <li className={css.smallButtonli}>
                    <Menu useState={setfSwitch} isActive={fswitch.menu}/>
                </li>
                <li className={css.largeButtonli}>
                    <Cart useState={setfSwitch} isActive={fswitch.cart} basket={basket}/>
                </li>
                <li className={css.smallButtonli}>
                    <History useState={setfSwitch} isActive={fswitch.history}/>
                </li>
            </ul>
        </footer>
    );
}