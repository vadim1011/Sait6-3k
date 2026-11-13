import { Photo } from "../Photo"
import classes from "../Page3/P3_secc3.module.scss"

export default function App() {
  return (
    <>
      <section className={classes.rev}>
        <div className={classes.box}>
            <h1>Отзывы</h1>
            <div className={classes.tabs}>
                <p><span>Положительные (65)</span></p>
                <p>Отрицательные(10)</p>
            </div>
            <div className={classes.grid}>
                <div className={classes.card}>
                    <div className={classes.item}>
                        <div className={classes.head}>
                            <img src={Photo.KRUG}></img>
                            <div className={classes.user}>
                                <h1>Никита Евреев</h1>
                                <img src={Photo.central}></img>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.item}>
                        <div className={classes.head}>
                            <img src={Photo.KRUG}></img>
                            <div className={classes.user}>
                                <h1>Никита Евреев</h1>
                                <img src={Photo.central}></img>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.item}>
                        <div className={classes.head}>
                            <img src={Photo.KRUG}></img>
                            <div className={classes.user}>
                                <h1>Никита Евреев</h1>
                                <img src={Photo.central}></img>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.item}>
                        <div className={classes.head}>
                            <img src={Photo.KRUG}></img>
                            <div className={classes.user}>
                                <h1>Никита Евреев</h1>
                                <img src={Photo.central}></img>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.item}>
                        <div className={classes.head}>
                            <img src={Photo.KRUG}></img>
                            <div className={classes.user}>
                                <h1>Никита Евреев</h1>
                                <img src={Photo.central}></img>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
                    </div>
                </div>
                <div className={classes.card}>
                    <div className={classes.item}>
                        <div className={classes.head}>
                            <img src={Photo.KRUG}></img>
                            <div className={classes.user}>
                                <h1>Никита Евреев</h1>
                                <img src={Photo.central}></img>
                            </div>
                        </div>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tellus tincidunt eget eu, eget commodo condimentum non, fringilla fermentum. Morbi sed enim facilisis metus pretium leo, mauris. In egestas cursus orci dignissim in lectus nulla. </p>
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
