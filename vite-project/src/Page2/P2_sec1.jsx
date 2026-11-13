import classes from "../Page2/P2_secc1.module.scss"

export default function App(){
    return(
        <>
            <section className={classes.find}>
                <div className={classes.box}>
                    <h1>Ищите и находите подходящую работу среди <span>10,000+</span> проектов и покажите на что Вы способны!</h1>
                    <form className={classes.form}>
                        <input className={classes.inp} placeholder="Какую работу ищете?"/>
                        <button className={classes.btn}>Найти</button>
                    </form>
                    <div className={classes.tags}>
                        <div className={classes.row1}>
                            <div className={classes.tag}>
                                <p>Тексты и переводы</p>
                            </div>
                            <div className={classes.tag}>
                                <p>Разработка</p>
                            </div>
                            <div className={classes.tag}>
                                <p>Дизайн</p>
                            </div>
                            <div className={classes.tag}>
                                <p>Аудио, видео монтаж</p>
                            </div>
                        </div>
                        <div className={classes.row2}>
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
                    <p>Ниже все заказы по <span>дизайну</span></p>
                    <p1>˅</p1>
                </div>
            </section>
        </>
    )
}
