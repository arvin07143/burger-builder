import React from "react";
import classes from './BuildControl.module.css'
import { IngredientBool } from "../../BurgerBuilder";

type BuildControlProp = {
    label:string
    ingredientAdded:Function
    ingredientReduced:Function
    disabled:boolean
}

const buildControl = (props:BuildControlProp) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <button className={classes.Less} onClick={()=>props.ingredientReduced()} disabled={props.disabled}>Less</button>
        <button className={classes.More} onClick={()=>props.ingredientAdded()}>More</button>
    </div>
)

export default buildControl