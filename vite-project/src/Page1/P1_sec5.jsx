import classes from "../Page1/P1_secc5.module.scss"
import { Photo } from "../Photo"

export default function App(){
    return(
        <>
            <section className={classes.biz}>
                <div className={classes.wrap}>
                    <div className={classes.box}>
                        <h1>Как WorkTap помогает бизнесу?</h1>
                        <div className={classes.list}>
                            <div className={classes.item}>
                                <img src={Photo.card}></img>
                                <p1>Оплачивайте с р/с или карты компании</p1>
                            </div>
                            <div className={classes.item}>
                                <img src={Photo.cashh}></img>
                                <p1>Экономьте до 87% бюджета на фрилансе</p1>
                            </div>
                            <div className={classes.item}>
                                <img src={Photo.time}></img>
                                <p1>Экономьте до 75% времени на решении фриланс задач</p1>
                            </div>
                        </div>
                        <p>WorkTap — быстро, просто и безопасно!</p>
                        <button className={classes.btn}>Начать!</button>
                    </div>
                </div>
            </section>
        </>
    )
}
