import React from "react";
import { Ingredient } from "../BurgerBuilder";
import Button from "../../Button/Button";

type OrderSummaryProps = {
    ingredients:Ingredient
    purchaseCancelled: Function
    purchaseContinue: Function
    price:number
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
            <p><strong>Total Price: {props.price.toFixed(2)}</strong></p>
            <p>Continue with Checkout?</p>
            <Button btnType="Danger" click={()=>props.purchaseCancelled()}>Cancel</Button>
            <Button btnType="Success" click={()=>props.purchaseContinue()}>Continue</Button>
        </div>
    )
    
};

export default orderSummary;