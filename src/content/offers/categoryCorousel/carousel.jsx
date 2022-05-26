import React from 'react';
import css from './carousel.module.css'
import CategoryItem from './categoryItem/categoryItem';
import { useState, useEffect } from 'react';
import { getCategories } from '../../../services/menu';


const Carousel = (props) => {
    const {category} = props;
    const [categoryState, setCategoryState] = category;
    const [categoryList, setCategoryList] = useState([])

    useEffect(() => {
        getCategories().then(json=> {
            setCategoryList(json.categories)
        })
    }, []);

    return (
        <div className={css.carousel}>
            <div className={css.carousel_wrapper}>
                {/* <CategoryItem title="Категория 1" active={true}/> */}
                {categoryList.map((cat) => <CategoryItem key={cat.id} catInfo={cat} categories={[categoryState, setCategoryState]}/>)}
            </div>
        </div>
    );
}

export default Carousel;
