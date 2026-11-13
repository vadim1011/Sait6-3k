import { Link, Navigate, NavLink, useSearchParams, } from "react-router-dom"
import classes from "../Header/Header.module.scss"
import Modal1 from "../Modal1/Modal1.jsx"
import Modal2 from "../Modal2/Modal2.jsx"
import Modal3 from "../Modal3/Modal3.jsx"
import Modal4 from "../Modal4/Modal4.jsx"
import { Photo } from "../Photo.js"
import React, { useState } from "react";

export default function Header(){
    const [activeModal, setActiveModal] = useState(null);
    const [isFindPasswordOpen, setIsFindPasswordOpen] = useState(null);
    const [NewPasswordOpen, setNewPassword] = useState(null);
    const active = ({isActive}) => `${classes.link} ${isActive ? classes.on : ""}`

    return(
        <>
        <header>
            <nav>
                <NavLink to='/Page1' className={active}>
                <img src={Photo.igor}></img>
                </NavLink>
                <li>
                    <NavLink to='/Page2' className={active}>
                    <h1>Биржа</h1>
                    </NavLink>
                    <NavLink className={classes.item}>
                    <h1>Ворки</h1>
                    </NavLink>
                    <NavLink className={classes.item}>
                    <h1>Конкурсы</h1>
                    </NavLink>
                    <NavLink className={classes.item}>
                    <h1>Создать ворк</h1>
                    </NavLink>
                    <NavLink className={classes.item}>
                    <h1>Создать заказ</h1>
                    </NavLink>
                </li>
                <div className={classes.auth}>
                    <button onClick={() => setActiveModal("Register")} className={classes.btn}>Регистрация</button>
                    {activeModal === "Register" && (
                        <Modal2 onClose={() => setActiveModal(null)} onSwitch={setActiveModal}>
                            <div className={classes.win2}>
                                <div className={classes.box}>
                                    <img src={Photo.igor}></img>
                                    <div className={classes.mid}>
                                        <p>Давайте создадим Вам аккаунт</p>
                                        <h1>Заполните все поля</h1>
                                        <div className={classes.form}>
                                            <div className={classes.row}>
                                                <h1>Ваше имя</h1>
                                                <input className={classes.inp} type="text" id="username" name="username" placeholder="Имя"></input>
                                            </div>
                                            <div className={classes.row}>
                                                <h1>Ваше фамилия</h1>
                                               <input className={classes.inp} type="text" id="username" name="username" placeholder="Фамилия"></input>
                                            </div>
                                            <div className={classes.row}>
                                                <h1>E-mail</h1>
                                               <input className={classes.inp} type="text" id="username" name="username" placeholder="E-mail"></input>
                                            </div>
                                            <div className={classes.row}>
                                                <h1>Телефон номер</h1>
                                               <input className={classes.inp} type="text" id="username" name="username" placeholder="Телефон"></input>
                                            </div>
                                            <div className={classes.row}>
                                                <h1>Пароль</h1>
                                               <input className={classes.inp} type="text" id="username" name="username" placeholder="Пароль"></input>
                                            </div>
                                            <div className={classes.row}>
                                                <h1>Повтoрите пароль</h1>
                                               <input className={classes.inp} type="text" id="username" name="username" placeholder="Пароль"></input>
                                            </div>
                                            <div className={classes.chk}>
                                                <label>
                                                 <input type="checkbox"/>
                                                 Запомнить меня
                                                </label>
                                                <label>
                                                 <input type="checkbox"/>
                                                 Я заказчик
                                                </label>
                                            </div>
                                            <button className={classes.sub}>Зарегистрироваться</button>
                                        </div>
                                        <div className={classes.foot}>
                                            <p>У Вас есть аккаунт? <button className={classes.alt} onClick={() => setActiveModal("Login")}>Войдите</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={Photo.girlzxc}></img>
                        </Modal2>
                    )}
                    <button onClick={() => setActiveModal("Login")} className={classes.btn}>Войти</button>
                    {activeModal === "Login" && (
                        <Modal1 onClose={() => setActiveModal(null)} onSwitch={setActiveModal}>
                            <div className={classes.win1}>
                                <div className={classes.box}>
                                    <img src={Photo.igor}></img>
                                    <div className={classes.mid}>
                                        <p>Добро пожаловать!</p>
                                        <h1>Войдите в свой аккаунт</h1>
                                        <div className={classes.form}>
                                            <div className={classes.row}>
                                                <h1>Email</h1>
                                                <input className={classes.inp} type="text" id="username" name="username" placeholder="E-mail"></input>
                                            </div>
                                            <div className={classes.row}>
                                                <h1>Пароль</h1>
                                               <input className={classes.inp} type="text" id="username" name="username" placeholder="Password"></input>
                                            </div>
                                            <div className={classes.chk}>
                                                <label>
                                                 <input type="checkbox"/>
                                                 Запомнить меня
                                                </label>
                                                <button onClick={() => setIsFindPasswordOpen("FindPassword")} className={classes.lost}>Забыли пароль?</button>
                                                {isFindPasswordOpen === "FindPassword" && (
                                                    <Modal3 onClose={() => setIsFindPasswordOpen(null)} onSwitch={setActiveModal}>
                                                        <div className={classes.win3}>
                                                            <div className={classes.box}>
                                                                <img src={Photo.igor}></img>
                                                                <div className={classes.mid}>
                                                                    <div className={classes.head}>
                                                                        <p>Мы отправим Вам код для восстановления пароля</p>
                                                                        <h1>Заполните поле ниже</h1>
                                                                    </div>
                                                                    <div className={classes.step}>
                                                                        <div className={classes.row}>
                                                                            <h1>E-mail</h1>
                                                                            <input className={classes.inp} type="text" id="username" name="username" placeholder="E-mail"></input>
                                                                        </div>
                                                                        <div className={classes.row}>
                                                                            <h1>Код </h1>
                                                                            <input className={classes.inp} type="text" id="username" name="username" placeholder="Код из почты"></input>
                                                                        </div>
                                                                        <button onClick={() => setNewPassword("NewPassword")} className={classes.sub}>Отправить код</button>
                                                                    </div>
                                                                    <div className={classes.foot}>
                                                                    <p>Вспомнили пароль? <button className={classes.alt} onClick={() => setIsFindPasswordOpen(null)}>Войдите</button></p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                         </div>
                                                         <img src={Photo.girlzxc}></img>
                                                    </Modal3>
                                                )}
                                                {NewPasswordOpen === "NewPassword" && (
                                                    <Modal4 onClose={() => setNewPassword(null)} onSwitch={setActiveModal}>
                                                        <div className={classes.win3}>
                                                            <div className={classes.box}>
                                                                <img src={Photo.igor}></img>
                                                                <div className={classes.mid}>
                                                                    <div className={classes.head}>
                                                                        <p>Давайте восстановим Вам пароль</p>
                                                                        <h1>Придумайте новый пароль</h1>
                                                                    </div>
                                                                    <div className={classes.step}>
                                                                        <div className={classes.row}>
                                                                            <h1>Пароль</h1>
                                                                            <input className={classes.inp} type="text" id="username" name="username" placeholder="Пароль"></input>
                                                                        </div>
                                                                        <div className={classes.row}>
                                                                            <h1>Повторите пароль</h1>
                                                                            <input className={classes.inp} type="text" id="username" name="username" placeholder="Пароль"></input>
                                                                        </div>
                                                                        <button onClick={() => setIsFindPasswordOpen(null)} className={classes.sub}>Отправить код</button>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <img src={Photo.girlzxc}></img>
                                                    </Modal4>
                                                )}
                                            </div>
                                        </div>
                                        <div className={classes.btns}>
                                            <button className={classes.log}>
                                                Войти
                                            </button>
                                            <button className={classes.soc}>
                                                <img src={Photo.google}></img>
                                                <p>Или войдите с помощю Google</p>
                                            </button>
                                        </div>
                                        <div className={classes.foot}>
                                            <p>У Вас все еще нет аккауна? <button className={classes.alt} onClick={() => setActiveModal("Register")}> Зарегистрируйтесь бесплатно!</button></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <img src={Photo.girlzxc}></img>
                        </Modal1>
                    )}
                </div>
            </nav>
        </header>
        </>
    )
}
