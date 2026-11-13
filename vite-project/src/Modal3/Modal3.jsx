import { useState } from "react"
import classes from "../Modal3/Modal3.module.scss"

export default function Modal3({onClose, children, onSwitch}){
    return(
        <>
            <div className={classes.wrap}>
                <div className={classes.box} onClick={(e)=>{
                if (e.target === e.currentTarget){
                    onClose()
                    console.log("click")
                }
            }}>
                    {children}
                </div>
            </div>
        </>
    )
}
