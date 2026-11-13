import classes from "../Page1/P1_secc1.module.scss"
import { Photo } from "../Photo"

export default function App(){
    return(
        <>
            <section className={classes.hero}>
                <div className={classes.box}>
                    <div className={classes.side}>
                     <h1>Покупайте фриланс-услуги в <span>два клика</span></h1>
                     <p>Ворк — единица работы продавца, которую можно купить как товар в магазине </p>
                     <form className={classes.form}>
                        <input className={classes.inp} placeholder="Что нужно сделать?"/>
                        <button className={classes.btn}>Найти</button>
                     </form>
                     <div className={classes.tags}>
                        <p>Выберите рубрику, чтобы начать</p>
                        <div className={classes.grid}>
                            <div className={classes.tag}>
                                <p>Тексты и переводы </p>
                            </div>
                            <div className={classes.tag}>
                                <p>Разработка</p>
                            </div>
                            <div className={classes.tag}>
                                <p>Дизайн</p>
                            </div>
                            <div className={classes.tag}>
                                <p>Аудио, видео монтаж </p>
                            </div>
                            <div className={classes.tag}>
                                <p>SEO и оптимизация</p>
                            </div>
                            <div className={classes.tag}>
                                <p>Бизнес и жизнь</p>
                            </div>
                            <div className={classes.tag}>
                                <p>Соцсети и реклама</p>
                            </div>
                            <div className={classes.all}>
                                <p>Все категории</p>
                            </div>
                        </div>
                     </div>
                    </div>
                    <img src={Photo.MAN}></img>
                </div>
            </section>
        </>
    )
}
