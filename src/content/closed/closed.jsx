import React from 'react';
import css from './closed.module.css'

const Closed = () => {
    return (
        <div className={css.closed}>
            <div className={css.closedWrapper}>
                <img src="/icons/store-alt-slash.svg" width="50px" height="50px" />
                <span className={css.closedText}>В данный момент Столовая не принимает заказы.</span>
            </div>
        </div>
    );
}

export default Closed;
