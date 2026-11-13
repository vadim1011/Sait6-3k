import { Photo } from "../Photo"
import classes from "../Page3/P3_secc1.module.scss"

export default function App() {
  return (
    <>
      <section className={classes.prof}>
        <div className={classes.tab}>
          <span>Быстрый поиск ворков</span>
          <span className={classes.arr}>&gt;</span>
        </div>
        <div className={classes.box}>
          <div className={classes.side}>
            <p>Дизайнер</p>
            <h1><span>Ернар</span> Ибрагимов</h1>
            <p className={classes.desc}>
              Работаю дизайнером с 1999 года.
              Был опыт в газетах, журналах, типографиях, рекламных агентствах, издательских домах...
              Порядка 8 лет занимаюсь логотипами и фирменными стилями.
            </p>
            <div className={classes.tags}>
              <span>Figma</span>
              <span>Adobe photoshop</span>
              <span>Adobe illustrator</span>
              <span>Corel draw</span>
              <span>Adobe After Effects</span>
              <span>HTML/CSS</span>
            </div>
            <button type="button" className={classes.btn}>
              Показать подробную информацию
              <span className={classes.ico}>∨</span>
            </button>
          </div>
          <div className={classes.pic}>
            <img src={Photo.guy} alt="Ернар Ибрагимов" className={classes.img} />
          </div>
        </div>
      </section>
    </>
  )
}
