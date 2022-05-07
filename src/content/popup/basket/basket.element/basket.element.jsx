import classNames from 'classnames';
import React from 'react';
import { useState } from 'react';
import css from './element.module.css';
const BasketElement = (props) => {
    const {element} = props
    const [amountState, setAmountState] = useState(element.amount);
    return (
        <div className={css.el}>
            <div className={css.el_wrap}>
                {/* <img src={element.img} alt="" className={css.img}/> */}
                <div style={{backgroundImage: 'url(img)'.replace('img', element.img)}} className={classNames({[css.imgContainer]: true})}></div>
                <div className={css.info}>
                    <div className={css.info_top}>
                        <p className={css.name}>{element.name}</p>
                        <p className={css.summ}>{amountState * element.price}₽</p>
                    </div>
                    <div className={css.info_bottom}>
                        <button className={css.amountButton} onClick={()=> {setAmountState(amountState-1)}}>-</button>
                        <p className={css.currAmount}>{amountState}</p>
                        <button className={css.amountButton} onClick={()=> {setAmountState(amountState+1)}}>+</button>
                    </div>
                </div>
            </div>
            <hr className={css.hr} />

        </div>
    );
}

export default BasketElement;
