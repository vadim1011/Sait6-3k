import { useState } from "react"
import classes from "../Modal2/Modal2.module.scss"

export default function Modal2({onClose, children, onSwitch}){
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
