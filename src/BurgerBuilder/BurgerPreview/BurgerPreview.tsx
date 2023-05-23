import React from "react";
import classes from './BurgerPreview.module.css'
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";
import { Ingredient } from "../BurgerBuilder";

const burgerPreview = (props: Ingredient) => {
    var transformedIngredients: string[] = [];

    Object.keys(props).map((key) => 
        transformedIngredients.push(...Array((props as any)[key]).fill(key))
    )

    var ingredients= transformedIngredients.map((key, index) => {
        return <BurgerIngredient key={index} type={key} />
    })

    if(transformedIngredients.length === 0){
        ingredients=[<p key={0}>Please add some ingredients!</p>]
    }

    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {ingredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
}

export default burgerPreview;