import React, { useState } from "react";
import BurgerPreview from "./BurgerPreview/BurgerPreview";
import BuildControls from "./BuildControls/BuildControls";
import { any } from "prop-types";

export type Ingredient = {
    salad: number;
    bacon: number;
    cheese: number;
    meat: number;
}

export type IngredientBool = {
    salad: boolean,
    bacon: boolean,
    cheese: boolean,
    meat: boolean,
}


const INGREDIENT_PRICE = {
    salad: 1,
    bacon: 1,
    cheese: 1,
    meat: 1
}

const BurgerBuilder = () => {

    const [ingredients, setIngredients] = useState<Ingredient>({
        salad: 0,
        bacon: 0,
        cheese: 0,
        meat: 0
    });

    const [price, setPrice] = useState<number>(4);

    const addIngredientHandler = (type:keyof(Ingredient)) => {
        setIngredients(
            {...ingredients,[type]:ingredients[type]+1}
        )
        setPrice(price+INGREDIENT_PRICE[type])
    };

    const removeIngredientHandler = (type:keyof(Ingredient)) => {
        if(ingredients[type]>0){
            setIngredients(
                {...ingredients,[type]:ingredients[type]-1}
            )
            setPrice(price-INGREDIENT_PRICE[type])
        }
    };



    let disabledInfo = {
        salad: false,
        bacon: false,
        cheese: false,
        meat: false,
    }

    Object.keys(ingredients).map((key)=>{
        if(ingredients[key as keyof Ingredient] <= 0){
            disabledInfo[key as keyof Ingredient] = true;
        }
    })
    


    return (
        <div>
            <div><BurgerPreview {...ingredients} /></div>
            <div><BuildControls 
            price={price}
            ingredientAdded={addIngredientHandler}
            ingredientReduced={removeIngredientHandler}
            disabledInfo={disabledInfo} /></div>
        </div>);
};

export default BurgerBuilder;