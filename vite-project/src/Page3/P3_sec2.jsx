import { Photo } from "../Photo"
import classes from "../Page3/P3_secc2.module.scss"

export default function App() {
  return (
    <>
      <section className={classes.works}>
        <div className={classes.box}>
            <h1>Мои ворки</h1>
            <div className={classes.grid}>
                <div className={classes.add}>
                    <img src={Photo.plus}></img>
                    <h1>Создать ворк</h1>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
                <div className={classes.card}>
                    <img src={Photo.Britney}></img>
                    <div className={classes.info}>
                        <h1>Дизайн сайта</h1>
                        <p>50 000 тенге</p>
                    </div>
                </div>
            </div>
            <div className={classes.foot}>
                <button className={classes.btn}>
                    Загрузить еще
                </button>
            </div>
        </div>
      </section>
    </>
  )
}
