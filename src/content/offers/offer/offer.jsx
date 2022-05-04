import css from './offer.module.css'
import './offer.module.css'

// {props.data.name}
// {props.data.price}

export function Offer(props) {
    return (
        <div className={css.card}>

            <div className={css.preview}>

                <img src={props.data.img} alt="Product picture" className={css.img}/>
                <div className={css.info}>

                    <div className={css.block}>

                        <p className={css.p_name}>{props.data.name}</p>
                        <p className={css.p_weight}>{props.data.weight} г.</p>

                    </div>

                </div>

                <div className={css.button}>

                    <p className={css.button_text}>Заказать за {props.data.price} ₽</p>

                </div>
                <div className={css.shadow}></div>

            </div>

        </div>
    );
}