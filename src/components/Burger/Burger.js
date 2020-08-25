import React from "react";
import classes from "./Burger.module.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
  /** transfrom object from props in array. Object.keys extract keys and turns them in array with strings.
   * maping keys(cheese,bacon ect). transform string value into array with as many elements as ingredients
   * has ingredients example: ingredients :{ chees: 2} so two cheese strings.
   * return array with spread operator with Array() method. so Array(props.ingredients[igkey]) return ["", "", "" etc]
   * maping over index of elements (_,i)
   * <BurgerIngredient key={igKey + i} type={igkey}/> because we need to return an array of jsx
   * igkey stands for cheese, bacon etc and i stands for the index of that element
   * type is igkey because it's a sting of values we get from object keys cheese, bacon etc
   * and the properties in bugerbuilder state must be equal to strings in the switch statement in Burger.js
   * reduce method function prev value and current value ( arr, el)
   * initial value is []
   * loop through all el and add them to initial value
   * returning updated value arr
   * concat takes giving el we are looping and add it to the array
   *
   */
  let transformedIngredients = Object.keys(props.ingredients)
    .map((igKey) => {
      return [...Array(props.ingredients[igKey])].map((_, i) => {
        return <BurgerIngredient key={igKey + i} type={igKey} />;
      });
    })
    .reduce((arr, el) => {
      return arr.concat(el);
    }, []);
  if (transformedIngredients.length === 0) {
    transformedIngredients = <p>Please start adding ingredients</p>;
  }
  console.log(transformedIngredients, "array?");
  return (
    <div className={classes.Burger}>
      <BurgerIngredient type="bread-top" />
      {transformedIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};

export default burger;
