import React, { Component } from "react";
import "./BurgerStyle.css";

export default class Burger extends Component {
  state = {
    meat: 0,
    cheese: 0,
    tomato: 0,
    lettuce: 0,
  };

  addRemoveIngredient = (action, ingredient) => {
    let { meat, cheese, tomato, lettuce } = this.state;

    let stateValue;

    switch (ingredient) {
      case "meat": {
        stateValue = meat;
        break;
      }
      case "cheese": {
        stateValue = cheese;
        break;
      }
      case "tomato": {
        stateValue = tomato;
        break;
      }
      case "lettuce": {
        stateValue = lettuce;
        break;
      }
      default:
        break;
    }
    if (action === "add") {
      stateValue = stateValue + 1;
    } else {
      stateValue = stateValue - 1;
    }
    this.setState({
      [ingredient]: stateValue >= 0 ? stateValue : 0,
    });
  };

  burgerContent = () => {
    let { lettuce, tomato, cheese, meat } = this.state;

    let burger = [];

    //output Lettuce
    for (let i = 0; i < lettuce; i++) {
      burger.push(<div key={burger.length} className="lettuceSide"></div>);
    }
    //output Tomato
    for (let i = 0; i < tomato; i++) {
      burger.push(<div key={burger.length} className="tomatoSide"></div>);
    }
    //output Cheese
    for (let i = 0; i < cheese; i++) {
      burger.push(<div key={burger.length} className="cheeseSide"></div>);
    }
    //output Meat
    for (let i = 0; i < meat; i++) {
      burger.push(<div key={burger.length} className="meatSide"></div>);
    }

    return burger;
  };

  render() {
    return (
      <>
        <div className="burgerIngredients">
          <div className="topBun"></div>
          {this.burgerContent()}
          <div className="bottomBun"></div>
        </div>
        <div className="ingredientsContainer">
          <p>Meat</p>
          <div className="ingBtns">
            <button
              onClick={() => this.addRemoveIngredient("add", "meat")}
              className="ingBtn"
            >
              Add
            </button>
            <button
              onClick={() => this.addRemoveIngredient("remove", "meat")}
              className="ingBtn"
            >
              Remove
            </button>
          </div>
          <p>Cheese</p>
          <div className="ingBtns">
            <button
              onClick={() => this.addRemoveIngredient("add", "cheese")}
              className="ingBtn"
            >
              Add
            </button>
            <button
              onClick={() => this.addRemoveIngredient("remove", "cheese")}
              className="ingBtn"
            >
              Remove
            </button>
          </div>
          <p>Tomato</p>
          <div className="ingBtns">
            <button
              onClick={() => this.addRemoveIngredient("add", "tomato")}
              className="ingBtn"
            >
              Add
            </button>
            <button
              onClick={() => this.addRemoveIngredient("remove", "tomato")}
              className="ingBtn"
            >
              Remove
            </button>
          </div>
          <p>Lettuce</p>
          <div className="ingBtns">
            <button
              onClick={() => this.addRemoveIngredient("add", "lettuce")}
              className="ingBtn"
            >
              Add
            </button>
            <button
              onClick={() => this.addRemoveIngredient("remove", "lettuce")}
              className="ingBtn"
            >
              Remove
            </button>
          </div>
        </div>
      </>
    );
  }
}
