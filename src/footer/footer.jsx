import { Menu } from "./Buttons/menu";
import { History } from "./Buttons/history";
import { Cart } from "./Buttons/cart";
import css from './footer.module.css';
import { useState } from "react";


export function Footer(props) {
    const {basket, switchprops} = props
    const [fswitch, setfSwitch] = switchprops

    return (
        <footer className={css.footer}>
            <ul className={css.ul}>
                <div className={css.buttonWrapper}>
                    <li className={css.smallButtonli}>
                        <Menu useState={setfSwitch} isActive={fswitch.menu}/>
                    </li>
                    <span className={css.buttonTitle}>Товары</span>
                </div>
                <li className={css.largeButtonli}>
                    <Cart useState={setfSwitch} isActive={fswitch.cart} basket={basket}/>
                </li>
                <div className={css.buttonWrapper}>
                    <li className={css.smallButtonli}>
                        <History useState={setfSwitch} isActive={fswitch.history}/>
                    </li>
                    <span className={css.buttonTitle}>Заказы</span>
                </div>
            </ul>
        </footer>
    );
}