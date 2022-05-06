import css from "./popup.module.css";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";

export function Popup(props){
    const {state} = props;
    const [popup, setPopup] = state;
    const [quontity, setQuontity] = useState(1);
    let display = css.display;

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
                    <p className={css.quontity}>Желаемое количество {quontity}</p>
                    <div className={css.buttons}>
                        <input type="button" value="-" id="minus" className={css.count} onClick={()=> {quontity-1>0 ? setQuontity(quontity-1) : alert("Нельзя добавить меньше одного.")} }/>
                        <input type="button" value="+" id="plus" className={css.count} onClick={()=> {
                            quontity+1<=popup.product.balance ? setQuontity(quontity+1) : alert("Нельзя добавить больше остатка.")} 
                            }/>
                    </div>
                    <div className={classNames([css.add], [css.button])}>
                        <p className={css.add_text} onClick>Добавить за {quontity*popup.product.price}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}