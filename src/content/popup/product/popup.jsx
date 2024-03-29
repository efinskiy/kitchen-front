import css from "../popup.module.css";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { addToBasket, getBasket } from "../../../services/basket";

export function Popup(props){
    const {basket, state} = props;
    const [basketState, setBasket] = basket
    const [popup, setPopup] = state;
    const [quontity, setQuontity] = useState(1);

    useEffect(
        () => {
            setQuontity(1)
        }, [popup]);
    
    return (
        <div className={classNames(css.popup, {[css.visible]: popup.state===1})}>
            <div className={css.content}>
                <div className={css.header}>
                    <h2 className={css.title}>{popup.product.name}</h2>
                    <span className={css.close} onClick={()=>setPopup({state: 0, product: {title: null, id: null, price: null, balance: null}})}>&times;</span>
                </div>
                <div className={css.body}>
                    <div className={css.controlsWrapper}>
                    <p className={css.quontity}>Желаемое количество </p>
                    <div className={css.buttons}>
                        <input type="button" value="-" id="minus" className={css.count} onClick={()=> {quontity-1>0 ? setQuontity(quontity-1) : alert("Нельзя добавить меньше одного.")} }/>
                        <span className={css.quantity}>{quontity}</span>
                        <input type="button" value="+" id="plus" className={css.count} onClick={()=> {
                                let curr = basketState.items.filter(p => p.itemid == popup.product.id);
                                curr.length != 0 ?
                                    quontity+1<=(popup.product.balance-popup.product.reserved) && curr[0].amount+(quontity+1)<= popup.product.balance ? setQuontity(quontity+1) : alert("Нельзя добавить больше остатка.")
                                                :
                                    quontity+1<=(popup.product.balance-popup.product.reserved) ? setQuontity(quontity+1) : alert("Нельзя добавить больше остатка.")                                
                            } 
                            }/>
                    </div>
                    </div>
                    <div className={classNames([css.add], [css.button])}>
                        <p className={css.add_text} onClick={()=> {
                            addToBasket(popup.product.id, quontity)
                            .then((status) => status.new_amount >= 1 ? setPopup({state: 0, product: {title: null, id: null, price: null, balance: null}}) : false)}}>
                                Добавить за {(quontity*popup.product.price).toFixed(2)} ₽
                                </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 
