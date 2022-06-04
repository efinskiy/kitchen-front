import css from "../popup.module.css";
import { useState, useEffect } from "react";
import classNames from "classnames/bind";
import { setPolicy } from "../../../services/user";

export function Policy(props){
    const {state} = props;
    const [popup, setPopup] = state;
    return (
        <div className={classNames(css.popup, {[css.visible]: popup===false})}>
            <div className={css.content}>
                <div className={css.header}>
                    <h2 className={css.title}>Формальности</h2>
                </div>
                <div className={css.body}>
                    <div className={css.policyInfo}>
                        <p>Нажимая «Согласен», вы соглашаетесь, что данный сервис может хранить файлы cookie на вашем устройстве и раскрывать информацию в соответствии с нашей <a href="/policy.html">Политикой в отношении файлов cookie.</a></p>
                    </div>
                    <div className={classNames([css.add], [css.button])} onClick={()=> setPolicy().then((json) => setPopup(true))}>
                        <p className={css.add_text} >Согласен</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

// 
