import css from './offer.module.css'
import './offer.module.css'

export function Offer(props) {
    const {popup, data} = props;
    const [popupState, setPopupState] = popup;
    return (
        <div>  
            <div className={css.card}>
                <div className={css.preview}>
                    <img src={"/api/v1/files/"+data.img} alt="Product picture" className={css.img}/>
                    <div className={css.info}>
                        <div className={css.block}>

                            <p className={css.p_name}>{data.name}</p>
                            <p className={css.p_weight}>{data.weight} г.</p>

                        </div>
                    </div>
                    <div className={css.button}>
                        <p className={css.button_text} onClick={() => setPopupState({state: 1, product: data})}>Заказать за {data.price} ₽</p>
                    </div>
                    <div className={css.shadow}></div>
                </div>
            </div>
        </div>
    );
}
