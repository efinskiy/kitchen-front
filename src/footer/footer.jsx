import { Menu } from "./Buttons/menu";
import { User } from "./Buttons/user";
import { Cart } from "./Buttons/cart";
import Orders from "./Buttons/orders";
import css from './footer.module.css';
import { useState } from "react";
import classNames from "classnames";
import Settings from "./Buttons/settings";


export function Footer(props) {
    const {basket, switchprops} = props
    const [fswitch, setfSwitch] = switchprops
    const [userFooterPopup, setUserFooterPopup] = useState(false);

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
                        <div className={classNames({[css.active]: userFooterPopup}, css.menuSubmenu)}>
                        <Orders useState={setfSwitch} isActive={fswitch.user.orders}/>
                        <Settings useState={setfSwitch} isActive={fswitch.user.profile}/>
                        </div>
                        <User useState={setUserFooterPopup} currentState={userFooterPopup} isActive={fswitch.user.active}/>
                    </li>
                    <span className={css.buttonTitle}>Профиль</span>
                </div>
            </ul>
        </footer>
    );
}