import { Offer } from "./offer/offer"
import { useEffect, useState } from "react";
import { getMenu } from "../../services/menu";
import Carousel from "./categoryCorousel/carousel";
import css from "./offers.module.css";

function changeCategorySwitch(category, state, setState) {
    let newState = {};
    Object.keys(state).forEach(key => {
        key === category ? newState.key = true : newState.key = false;
      });
    setState(newState);
};

export function Offers(props) {
    const {popup, category} = props
    const [offers, setOffers] = useState([]);
    const [categoryState, setCategoryState] = category;
    useEffect(
        () => {
            getMenu().then(menu => setOffers(menu.products))
        }, []
    );

    return (
        <div className={css.style}>
            <Carousel category={[categoryState, setCategoryState]}/>
            {offers.map(item => <Offer key={item.id} data = {item} popup={popup}/> )}
        </div>
        )
}