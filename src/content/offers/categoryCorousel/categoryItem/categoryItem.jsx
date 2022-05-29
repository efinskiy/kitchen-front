// import classNames from 'classnames';
// import React, { useMemo } from 'react';
// import css from './categoryItem.module.css';
// import {useEffect, useState, useCallback} from 'react'




// const CategoryItem = (props) => {
//     const {catInfo, category, defId} = props;
//     const [state, setState] = category;

//     const [stateItem, setStateItem] = useState(state);
//     const [isActive, setIsActive] = useState({id:defId, isActive:catInfo.is_default})

//     // useEffect(() => {
//     //     for (const key in stateItem) {

//     //     }
//     // }, [isActive, stateItem]);

//    const lal = id => {
//        if (id == stateItem.id) {
//             setIsActive({id:id, isActive: true});
//         } else {
//             setIsActive({id:id, isActive: false})
//        }
//        for (const key in stateItem) {
//            console.log(key, id);
//            if (key == id) {
//                stateItem[`${key}`].enabled = true;
//            } else {
//                 stateItem[`${key}`].enabled = false;
//            }
//            setStateItem(stateItem);
//            setState(stateItem);
           
//         }
//         console.log(stateItem, 'stateItem');
//    }


//     const c = useMemo(() => {
//         return (
//             <li className={classNames(css.item, {[css.active]: isActive.isActive})} onClick={() => lal(catInfo.id)}>
//                 <div className={css.itemWrapper}>
//                         {`${stateItem[catInfo.id].enabled}`}
//                         {`${stateItem[catInfo.id].title}`}
//                 </div>
//             </li>
//         )
//     }, [isActive, stateItem])

//     return c;
// }

// export default CategoryItem;
