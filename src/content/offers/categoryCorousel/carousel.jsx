import React, { useMemo } from 'react';
import css from './carousel.module.css'
import cssList from './categoryItem/categoryItem.module.css'
// import CategoryItem from './categoryItem/categoryItem.module.css';
import { useState, useEffect } from 'react';
import { getCategories } from '../../../services/menu';
import classNames from 'classnames';


const Carousel = (props) => {
    const {category, offers} = props;
    const [categoryState, setCategoryState] = category;
    const [offersActivId, setOffersActivId] = offers;
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getCategories().then(json=> {
            // console.log(json, 'getCategories()')
            setCategoryList(json.categories)
        })
    }, []);

    const handelClick = id => {
        const a = categoryList.map(el => {
            if (el.id == id) {
                el.is_default = true;
                setOffersActivId(id);
            } else {
                el.is_default = false;
            }
            return {...el};
        });
        setCategoryList(a);
        setCategoryState(a);
    }
    return (
        <div className={css.carousel}>
            <div className={css.carousel_wrapper}>
                {categoryList.map(cat => (
                    <li key={cat.id} className={classNames(cssList.item, {[cssList.active]: cat.is_default})} onClick={() => handelClick(cat.id)}>
                            {cat.is_default ? setOffersActivId(cat.id): false}
                         <div className={cssList.itemWrapper}>
                            {`${cat.title}`}
                         </div>
                    </li>
                ))}
            </div>
        </div>
    );
}

export default Carousel;
