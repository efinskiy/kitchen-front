import React from 'react';
import css from './loader.module.css'

const Loader = () => {
    return (
        <div className={css.loader}>
            <div className={css.loaderWrapper}>
                <img src="/icons/hourglass.svg" width="50px" height="50px" />
                <span className={css.loaderText}>Загрузка...</span>
            </div>
        </div>
    );
}

export default Loader;
