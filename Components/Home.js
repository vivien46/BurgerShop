import React, {useState} from "react";
import styles from "../styles/Home.module.css";
import Burger from "./Burger";

export default function Home() {
    const [lastBurgers, setLastBurgers] = useState([]);

    const selectedBurger = (name) => {
        setLastBurgers([...lastBurgers, name]);
    };

    const removeBurger = (name) => {
        setLastBurgers(lastBurgers.filter(burger => burger !== name));
    };

    const burgerData = [
        { name: "Hamburger", price: 1.5 , description : "A hamburger is a sandwich consisting of one or more cooked patties of ground meat, usually beef, placed inside a sliced bread roll or bun. The patty may be pan fried, grilled, smoked or flame broiled."},
        { name: "Cheeseburger", price: 2, description : "A cheeseburger is a hamburger topped with cheese. Traditionally, the slice of cheese is placed on top of the meat patty, but the burger can include many variations in structure, ingredients, and composition."},
        { name: "Bacon Cheeseburger", price: 3, description : "A bacon cheeseburger is a hamburger topped with cheese and bacon. Variants include versions with different types of cheese and bacon, as well as those made with turkey, vegan meat substitutes, and other non-traditional ingredients."},
        { name: "Veggie Burger", price: 2.5, description : "A veggie burger is a burger patty that does not contain meat. These burgers may be made from ingredients like beans, especially soybeans and tofu, nuts, grains, seeds or fungi such as mushrooms or mycoprotein."},
        { name: "Double Cheeseburger", price: 3.5, description : "A double cheeseburger is a hamburger with two patties instead of one. The cheese is usually added between the patties, but the burger can include many variations in structure, ingredients, and composition."},
    ];

    const burgerComponents = burgerData.map((burger, index) => {
        return (
            <Burger
                key={index}
                name={burger.name}
                price={burger.price}
                description={burger.description}
                selectedBurger={selectedBurger}
                removeBurger={removeBurger}
            />
        );
    });

    return (
        <>
        <div className={styles.container}>
            <h1 className={styles.title}>Burger Shop</h1>
            <span>Derniers Burgers Selectionnés : </span>| {lastBurgers.join(" ")} |
            <hr />
            {burgerComponents}
        </div>
        </>
    );
}