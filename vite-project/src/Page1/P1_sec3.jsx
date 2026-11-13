import classes from "../Page1/P1_secc3.module.scss"
import { Photo } from "../Photo"

export default function App(){
    return(
        <>
            <section className={classes.top}>
                <div className={classes.box}>
                    <h1>Топ фрилансеров</h1>
                    <div className={classes.grid}>
                        <div className={classes.card}>
                            <div className={classes.row}>
                                <img src={Photo.first}></img>
                                <div className={classes.info}>
                                    <p>Марина Королёва</p>
                                    <h1>Разработчик PHP  </h1>
                                    <p>Выполено проектов: 65</p>
                                    <img src={Photo.dababy}></img>
                                </div>
                            </div>
                            <button className={classes.btn}>Написать</button>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.row}>
                                <img src={Photo.second}></img>
                                <div className={classes.info}>
                                    <p>Семён Сергеев</p>
                                    <h1>Копирайтер</h1>
                                    <p>Выполено проектов: 104</p>
                                    <img src={Photo.central}></img>
                                </div>
                            </div>
                            <button className={classes.btn}>Написать</button>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.row}>
                                <img src={Photo.third}></img>
                                <div className={classes.info}>
                                    <p>Ангелина Сорокина</p>
                                    <h1>Дизайнер сайтов</h1>
                                    <p>Выполено проектов: 25</p>
                                    <img src={Photo.asap}></img>
                                </div>
                            </div>
                            <button className={classes.btn}>Написать</button>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.row}>
                                <img src={Photo.four}></img>
                                <div className={classes.info}>
                                    <p>Никита Зайцев</p>
                                    <h1>Маркетолог</h1>
                                    <p>Выполено проектов: 144</p>
                                    <img src={Photo.central}></img>
                                </div>
                            </div>
                            <button className={classes.btn}>Написать</button>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.row}>
                                <img src={Photo.fith}></img>
                                <div className={classes.info}>
                                    <p>Наталья Захарова</p>
                                    <h1>Motion дизайнер </h1>
                                    <p>Выполено проектов: 71</p>
                                    <img src={Photo.asap}></img>
                                </div>
                            </div>
                            <button className={classes.btn}>Написать</button>
                        </div>
                        <div className={classes.more}>
                            <h1>Посмотреть всех ТОП фрилансеров</h1>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
