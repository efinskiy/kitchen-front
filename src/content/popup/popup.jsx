import css from "./popup.module.css";
import { useState } from "react";
import classNames from "classnames";

export function Popup(props){
    const {state} = props;
    const [popup, setPopup] = state;
    const [quontity, setQuontity] = useState(1);
    
    return (
        <div className={'wrapper popup selected'}>
            <div className={css.content}>
                <div className={css.header}>
                    <h2 className={css.title}>Название товара</h2>
                    <span className={css.close} onClick={()=>setPopup(0)}>&times;</span>
                </div>
                <div className={css.body}>
                    <p className={css.quontity}>Желаемое количество {quontity}</p>
                    <div className={css.buttons}>
                        <input type="button" value="-" id="minus" className={css.count} onClick={()=> setQuontity(quontity-1) }/>
                        <input type="button" value="+" id="plus" className={css.count} onClick={()=> setQuontity(quontity+1) }/>
                    </div>
                    <div className={classNames({'add': true, 'button': true})}>
                        <p className={css.add_text} onClick>Добавить за</p>
                    </div>
                </div>
            </div>
        </div>
    )
}