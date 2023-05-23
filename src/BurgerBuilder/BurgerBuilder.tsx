import React, { useState } from "react";
import BurgerPreview from "./BurgerPreview/BurgerPreview";
import BuildControls from "./BuildControls/BuildControls";
import Modal from "./Modal/Modal";
import OrderSummary from "./OrderSummary/OrderSummary";

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

    const [purchasable, setPurchasable] = useState(false);

    const [purchasing, setPurchasing] = useState(false);

    const updatePurchaseState = (ingredientList:Ingredient) => {
        const sum = Object.keys(ingredientList).map(igKey =>{
            return ingredientList[igKey as keyof Ingredient];
        })
        .reduce((sum,el)=>{
            return sum + el;
        },0)

        setPurchasable(sum>0)
    }

    const updatePurchasingState = () =>{
        setPurchasing(true);
    }

    const addIngredientHandler = (type:keyof(Ingredient)) => {

        const newValue = {...ingredients,[type]:ingredients[type]+1}
        setIngredients(
            newValue
        )
        setPrice(price+INGREDIENT_PRICE[type])
        updatePurchaseState(newValue)
    };

    const removeIngredientHandler = (type:keyof(Ingredient)) => {
        if(ingredients[type]>0){
            const newValue = {...ingredients,[type]:ingredients[type]-1}
            setIngredients(
                newValue
            )
            setPrice(price-INGREDIENT_PRICE[type])
            updatePurchaseState(newValue)
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

    console.log(purchasing);

    return (
        <div>
            <Modal show={purchasing}>
                <OrderSummary ingredients={ingredients} />
            </Modal>
            <div><BurgerPreview {...ingredients} /></div>
            <div><BuildControls 
            price={price}
            ingredientAdded={addIngredientHandler}
            ingredientReduced={removeIngredientHandler}
            disabledInfo={disabledInfo}
            purchasable = {purchasable}
            ordered={updatePurchasingState} /></div>
        </div>);
};

export default BurgerBuilder;