import { useState } from "react";

const Add = ({ table = 100}) => {

    //! State pour stocker la valeur actuelle de la table de multiplication
    const [result, setResult] = useState(0);

    //! Fonction qui va se déclencher lorsque l'utilisateur clique sur "x3"
    const handleMultiplication = () => {
        console.log(`On additionne ${table} !!!`);

        console.log('Avant', result);
        setResult(result => result + table);
        console.log('Après', result);
    }

    //! Fonction pour remettre la valeur à 0
    const handleReset = () => {
        console.log(`Reset !!!`);
        setResult(result => 0);
    }

    //! Rendu du composant
    return (
        <div>
            <h2>Addition par {table}</h2>
            <h3>La valeur : {result}</h3>
            <button onClick={handleMultiplication}> +{table} </button>
            <button onClick={handleReset}> Reset </button>
        </div>
    )
}

export default Add;