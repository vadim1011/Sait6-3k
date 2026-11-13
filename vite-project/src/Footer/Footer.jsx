import { Link, Navigate, NavLink, useSearchParams } from "react-router-dom"
import classes from "../Footer/Footer.module.scss"
import { Photo } from "../Photo.js"
import React, { useState } from "react";

export default function Footer(){

    return(
        <>
        <footer>
            <div className={classes.box}>
                <div className={classes.row}>
                    <div className={classes.col1}>
                        <h1>Топ категории</h1>
                        <div className={classes.list}>
                            <p>Тексты и переводы</p>
                            <p>Разработка</p>
                            <p>Дизайн</p>
                            <p>Аудио, видео монтаж</p>
                            <p>Соцсети и реклама</p>
                            <p>Бизнес и жизнь</p>
                            <p>SEO и оптимизация</p>
                        </div>
                    </div>
                    <div className={classes.col2}>
                        <h1>О Проекте</h1>
                        <div className={classes.list}>
                            <p>О Нас</p>
                            <p>Как Это Работает</p>
                            <p>Политика Приватности</p>
                            <p>Правила Пользования </p>
                            <p>Пресса о нас</p>
                        </div>
                    </div>
                    <div className={classes.col3}>
                        <h1>Поддержка</h1>
                        <div className={classes.list}>
                            <p>Контакты</p>
                            <p>Политика Безопасности</p>
                            <p>FAQ</p>
                        </div>
                    </div>
                    <div className={classes.col4}>
                        <h1>Follow</h1>
                        <div className={classes.list}>
                            <img src={Photo.faceb} />
                            <img src={Photo.bird} />
                            <img src={Photo.insta} />
                            <img src={Photo.inna} />
                        </div>
                    </div>
                </div>
                <p>Copyright @ 2021  |  WorkTap – Worktap.KZ. All Rights Reserved</p>
            </div>
        </footer>
        </>
    )
}
