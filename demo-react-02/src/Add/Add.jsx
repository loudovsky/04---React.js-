import { useState } from "react";

const INITIAL_COUNT = 0;

const Add = ({ step = 100}) => {

    //! State pour stocker la valeur actuelle de la table de multiplication
    const [result, setResult] = useState(INITIAL_COUNT);
    const condition = false;

    //! Fonction qui va se déclencher lorsque l'utilisateur clique sur "x3"
    const handleAddition = () => {
        console.log(`On additionne ${step} !!!`);

        console.log('Avant', result);
        setResult(result => result + step);
        console.log('Après', result);
    }

    //! Fonction pour remettre la valeur à 0
    const handleReset = () => {
        console.log(`Reset !!!`);
        setResult(INITIAL_COUNT);
    }

    //! Rendu du composant
    return (
        <>
            <p>Compteur : {result}</p>
            <button onClick={handleAddition}> +{step} </button>
            {result !== INITIAL_COUNT && (
                <button onClick={handleReset}> Reset </button>
            )
            }
            
        </>
    );
};

export default Add;