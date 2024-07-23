import React, {useState} from "react";
import styles from "../styles/Burger.module.css";

function Burger(props){
    const [nbLike, setNbLike] = useState(0);

    const handleClick = () => {
        setNbLike(nbLike + 1);
    };

    const handleSelect = () => {
        props.selectedBurger(props.name);
    };

    const handleRemove = () => {
        props.removeBurger(props.name);
    };

    return (
        <div className={styles.container}>
            <div className={styles.BurgerName}>
                <p >{props.name}</p>
            </div>
            <div className={styles.BurgerPrice}>
                <p>{props.price} €</p>
            </div>
            <div className={styles.BurgerDescription}>
                {props.description}
            </div>
            <button onClick={handleClick} className={styles.BurgerButton}>Like</button>
            <span>{nbLike}</span>
            <button onClick={handleSelect} className={styles.BurgerSelectButton}>Select</button>
            <button onClick={handleRemove} className={styles.BurgerDeleteButton}>X</button>
        </div>
    )
}

export default Burger;