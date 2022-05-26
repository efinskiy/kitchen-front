import classNames from 'classnames';
import React from 'react';
import css from './categoryItem.module.css';
import {useEffect, useState} from 'react'
function changeCategorySwitch(categoryId, currentState, setState) {
    let newState = currentState;
    Object.keys(currentState).forEach(key => {
        console.log(key);
        key === categoryId ? newState.key.enabled = true : newState.key.enabled = false;
      });
    setState(newState);
};



const CategoryItem = (props) => {
    const {catInfo, categories} = props;
    const [categoryState, setCategoryState] = categories;

    
    const thisId = parseInt(catInfo.id);
    console.log(categoryState)
    return (
        categoryState[thisId] == undefined ? <p>Загрузка</p> : 
            <li className={classNames(css.item, {[css.active]: categoryState[thisId]["enabled"] == true})}>
                <div className={css.itemWrapper}>
                    {catInfo.title}
                </div>
            </li>
    );
}

export default CategoryItem;
