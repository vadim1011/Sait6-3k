import classes from "../Page1/P1_secc4.module.scss"
import { Photo } from "../Photo"

export default function App(){
    return(
        <>
            <section className={classes.steps}>
                <div className={classes.box}>
                    <div className={classes.head}>
                        <h1>Как решать задачи на WorkTap?</h1>
                    <p>Идеально подходит для бизнеса и частных лиц</p>
                    </div>
                    <div className={classes.row}>
                        <div className={classes.item}>
                            <img src={Photo.babenka}></img>
                            <h1>Выберите услугу</h1>
                            <p>В супермаркете WorkTap представлен широкий выбор услуг от квалифицированных специалистов.</p>
                        </div>
                        <div className={classes.item}>
                            <img src={Photo.cash}></img>
                            <h1>Оплатите</h1>
                            <p>Деньги будут перечислены продавцу после того, как он выполнит работу, и вы её одобрите. </p>
                        </div>
                        <div className={classes.item}>
                            <img src={Photo.doki}></img>
                            <h1>Получите результат</h1>
                            <p>Наш супермаркет гарантирует вам возврат средств в полном объёме в случае невыполнения заказа.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
