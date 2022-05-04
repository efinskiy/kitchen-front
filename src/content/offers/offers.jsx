import { Offer } from "./offer/offer"
import { useEffect, useState } from "react";
import { getMenu } from "../../services/menu";

export function Offers(props) {
    const [offers, setOffers] = useState([]);
    useEffect(
        () => {
            getMenu().then(menu => setOffers(menu.products))
        }, []
    );

    return (offers.map(item => <Offer key={item.id} data = {item}/> ))
}