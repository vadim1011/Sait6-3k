import classes from "../Page1/P1_secc2.module.scss"
import { Photo } from "../Photo"

export default function App(){
    return(
        <>
            <section className={classes.works}>
                <div className={classes.box}>
                    <h1>Актуальные ворки</h1>
                    <div className={classes.grid}>
                        <div className={classes.card}>
                            <div className={classes.item}>
                                <div className={classes.head}>
                                    <img src={Photo.kim}></img>
                                    <h1>Сделать дизайн интернет-магазина</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                                <button className={classes.btn}>Посмотреть</button>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.item}>
                                <div className={classes.head}>
                                    <img src={Photo.shar}></img>
                                    <h1>Верстка landing page</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                                <button className={classes.btn}>Посмотреть</button>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.item}>
                                <div className={classes.head}>
                                    <img src={Photo.chel}></img>
                                    <h1>Сделать дизайн сайта-каталога и посадить на какой нибудь ко...</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                                <button className={classes.btn}>Посмотреть</button>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.item}>
                                <div className={classes.head}>
                                    <img src={Photo.scarry}></img>
                                    <h1>Продвижение instagram </h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                                <button className={classes.btn}>Посмотреть</button>
                            </div>
                        </div>
                        <div className={classes.card}>
                            <div className={classes.item}>
                                <div className={classes.head}>
                                    <img src={Photo.grand}></img>
                                    <h1>Срочно! Нужен веб дизайнер!</h1>
                                </div>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam sed leo at hendrerit dictum diam, enim. Dolor in imperdiet ultrices mauris. Est vitae vulputate est nec cras. Turpis nunc ornare nulla neque, interdum. At pharetra consectetur nec est convallis...</p>
                                <button className={classes.btn}>Посмотреть</button>
                            </div>
                        </div>
                        <div className={classes.more}>
                            <p>Смотреть все ворки</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
