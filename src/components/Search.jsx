import { useEffect, useState } from "react";
import styles from "./search.module.css";

const URL = "https://api.spoonacular.com/recipes/complexSearch";
const API_KEY = "7536f52725a94da9b5723fb20e4544d5";
export default function Search({foodData, setFoodData}) {
    const [query, setQuery] = useState("pizza");
    //syntax of the useEffect work
    useEffect(() => {
        async function fetchFood() {
            const res = await fetch(`${URL}?query=${query}&apiKey=${API_KEY}`)
            const data = await res.json()
            console.log(data.results);
            setFoodData(data.results)
        }
        fetchFood()
    }, [query])
    return (
        <div className={styles.searchContainer}>
            <input className={styles.input} type="text" onChange={(e) => setQuery(e.target.value)} value={query}/>
        </div>  
    )
}