import classes from "../Header/Header_Birza.module.scss"
import { Photo } from "../Photo.js"
import { NavLink } from 'react-router-dom';
import React, { useState } from "react";

export default function Header_Birza(){
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
                    <h1>Создать заказ</h1>
                    </NavLink>
                </li>
                <div className={classes.user}>
                    <img src={Photo.star}></img>
                    <img src={Photo.kolokol}></img>
                    <img src={Photo.chat}></img>
                    <p>Ернар Ибрагимов</p>
                    <NavLink to='/Page3' className={active}><img src={Photo.chur}></img></NavLink>
                    <h1>˅</h1>
                </div>
            </nav>
        </header>
        </>
    )
}
