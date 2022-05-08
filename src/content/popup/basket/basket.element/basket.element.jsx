import classNames from 'classnames';
import React from 'react';
import { useState, useEffect } from 'react';
import css from './element.module.css';
import { addToBasket, removeItem, getBasket, getBalance } from '../../../../services/basket';

const BasketElement = (props) => {
    const {element, basket} = props
    const [basketState, setBasketState] = basket;
    const [amountState, setAmountState] = useState(element.amount);
    const [balance, setBalance] = useState(0)

    useEffect(() => {
        getBasket().then(basket => setBasketState(basket))
    }, [amountState]);

    useEffect(
        () => {
            getBalance(element.itemid).then(json => setBalance(json.amount))
        }, [amountState]
    )

    return (
        amountState !== 0 ? 
        <div className={css.el}>
            <div className={css.el_wrap}>
                <div className={css.imgWrap}>
                    <div style={{backgroundImage: 'url(img)'.replace('img', element.img)}} className={classNames({[css.imgContainer]: true})}></div>
                </div>
                <div className={css.info}>
                    <div className={css.info_top}>
                        <p className={css.name}>{element.name}</p>
                        <p className={css.summ}>{(amountState * element.price).toFixed(2)}₽</p>
                    </div>
                    <div className={css.info_bottom}>
                        <button className={css.amountButton} onClick={()=> {removeItem(element.itemid).then(json => (setAmountState(json.new_amount)))}}>-</button>
                        <p className={css.currAmount}>{amountState}</p>
                        <button className={css.amountButton} onClick={()=> {
                                let curr = basketState.items.filter(p => p.itemid == element.itemid); 
                                console.log(curr);                     
                                amountState+1<=balance ? 
                                                        addToBasket(element.itemid, 1)
                                                                                    .then(json => (
                                                                                        json.response !== 201 ? setAmountState(amountState+1) 
                                                                                                                : false
                                                                                    )) 
                                                        : alert("Нельзя добавить больше остатка.")                            
                            }}>+</button>
                    </div>
                </div>
            </div>
            <hr className={css.hr} />
        </div>
        : false
    );
}

export default BasketElement;
