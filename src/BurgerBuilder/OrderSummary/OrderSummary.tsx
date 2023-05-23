import React from "react";
import { Ingredient } from "../BurgerBuilder";

type OrderSummaryProps = {
    ingredients:Ingredient
}

const orderSummary = (props:OrderSummaryProps) => {
    const ingredientSummary = Object.keys(props.ingredients).map(igKey =>{
        return (<li key={igKey}>
            <span style={{textTransform:'capitalize'}}>{igKey}</span>:{props.ingredients[igKey as keyof Ingredient]}
            </li>)
    })
    return(
        <div>
            <h3>Your Order</h3>
            <p>A delicious burger with the following ingredients:</p>
            <ul>
                {ingredientSummary}
            </ul>
            <p>Continue with Checkout?</p>
        </div>
    )
    
};

export default orderSummary;