import { useState } from "react";

const Multi = ({ table = 3}) => {

    //! State pour stocker la valeur actuelle de la table de multiplication
    const [result, setResult] = useState(1);

    //! Fonction qui va se déclencher lorsque l'utilisateur clique sur "x3"
    const handleMultiplication = () => {
        console.log(`Multi par ${table} !!!`);

        console.log('Avant', result);
        setResult(result => result * table);
        console.log('Après', result);
    }

    //! Fonction pour remettre la valeur à 1
    const handleReset = () => {
        console.log(`Reset !!!`);
        setResult(result => 1);
    }

    //! Rendu du composant
    return (
        <div>
            <h2>Multiplication par {table}</h2>
            <h3>La valeur : {result}</h3>
            <button onClick={handleMultiplication}> x{table} </button>
            <button onClick={handleReset}> Reset </button>
        </div>
    )
}

export default Multi;