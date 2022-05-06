import { Offer } from "./offer/offer"
import { useEffect, useState } from "react";
import { getMenu } from "../../services/menu";
import css from "./offers.module.css";

export function Offers(props) {
    const {popup} = props
    const [offers, setOffers] = useState([]);
    useEffect(
        () => {
            getMenu().then(menu => setOffers(menu.products))
        }, []
    );

    return (
        <div className={css.style}>
            {offers.map(item => <Offer key={item.id} data = {item} popup={popup}/> )}
        </div>
        )
}