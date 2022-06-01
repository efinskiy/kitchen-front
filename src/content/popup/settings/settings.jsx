import React from 'react';
import css from './settings.module.css'
import { useEffect, useState, useRef } from 'react';
import { getCustomerInfo, getCustomerKey } from '../../../services/settings';
import classNames from "classnames";
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { updateUser } from '../../../services/user';

const Settings = (props) => {
    const [customerName, setCustomerName] = useState(undefined);
    const [customerEmail, setCustomerEmail] = useState(undefined);
    const [customerKey, setCustomerKey] = useState({key: undefined});

    useEffect(() => {
        getCustomerInfo().then(json => {setCustomerName(json.name); setCustomerEmail(json.email)})
        getCustomerKey().then(json => setCustomerKey(json))
    }, []);

    const validateEmail = (email) => {
        var re = /\S+@\S+\.\S+/;
        return re.test(email);
    }

    const sendChanges = () => {
        if (validateEmail(customerEmail)){
            if (customerName.length > 0){
                updateUser(customerName, customerEmail).then(()=> alert("Изменения внесены."));
            }else{
                alert('Пожалуйста, введите ваше имя')
            }
        }else{
            alert('Пожалуйста, введите электронную почту')
        }
    }
    
    return (
        <div className={css.settings}>
            
            <h2 className={css.header}>Настройки профиля</h2>
            <div className={css.content}>

                <div className={classNames(css.customerName, css.block)}>
                    <p className={css.settingTitle}>Имя</p>
                    <input className={css.dataInput} required placeholder="Ваше имя" type="text" value={customerName} onChange={(event) => setCustomerName(event.target.value)}/>
                </div>

                <div className={classNames(css.customerEmail, css.block)}>
                    <p className={css.settingTitle}>Email</p>
                    <input className={css.dataInput} placeholder="Электронная почта" type='email' value={customerEmail} onChange={(event) => setCustomerEmail(event.target.value)}/> 
                    <button className={css.actionButton} onClick={sendChanges}>Сохранить</button>
                </div>
                
                <div className={classNames(css.recoveryLink, css.block)}>
                    <p className={css.settingTitle}>Ссылка восстановления</p>
                    <input className={css.dataInput} readOnly value={customerKey.key === undefined ? "Загрузка..." : 'https://stolovaya.online/api/v1/user/recovery?key='+customerKey.key}/>
                    <CopyToClipboard text={'https://stolovaya.online/api/v1/user/recovery?key='+customerKey.key} onCopy={()=> alert('Ссылка восстановления аккаунта скопирована в буфер обмена.')}>

                    <button className={css.actionButton}>Скопировать</button>
                    </CopyToClipboard>
                </div>
            </div>


        </div>
    );
}

export default Settings;
