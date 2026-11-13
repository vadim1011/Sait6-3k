import { useState } from "react"
import classes from "../Modal1/Modal1.module.scss"

export default function Modal1({onClose, children, onSwitch}){
    return(
        <>
            <div className={classes.wrap} >
                <div className={classes.box} onClick={(e)=> { 
                if (e.target == e.currentTarget){
                    onClose()
                }
            }}>
                    {children}
                </div>
            </div>
        </>
    )
}
