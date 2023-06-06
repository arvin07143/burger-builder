import React from "react";
import classes from './BuildControls.module.css'
import BuildControl from "./BuildControl/BuildControl";
import { IngredientBool } from "../BurgerBuilder";

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }

];

type BuildControlsProp = {
    ingredientAdded: Function
    ingredientReduced: Function
    disabledInfo: IngredientBool
    price: number
    purchasable: boolean
    ordered: Function
}

const buildControls = (props: BuildControlsProp) => (
    <div className={classes.BuildControls}>
        <p>Current Price: RM <strong>{props.price}</strong></p>
        {controls.map(control => (
            <BuildControl
                key={control.label}
                label={control.label}
                ingredientAdded={() => props.ingredientAdded(control.type)}
                ingredientReduced={() => props.ingredientReduced(control.type)}
                disabled={props.disabledInfo[control.type as keyof IngredientBool]} />
        ))}
        <button className={classes.OrderButton} disabled={!props.purchasable} onClick={() => props.ordered()}>Order Now</button>
    </div>
);

export default buildControls