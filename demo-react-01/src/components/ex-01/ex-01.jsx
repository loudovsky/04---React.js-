import style from './ex-01.module.css';

//! Exemple de composant

const Bienvenue = ({ firstname, age }) => {
    let nextage = age + 1;
    const isPair = () => {
        if (age%2 !=0) {
            return "Votre âge est un nombre impair"
        }
        else {
            return "Votre âge est un nombre pair"
        }
    }

    return(
        <div>
            <p className={style.bigbold}>Bienvenue {firstname} sur l'Application React ⛺</p>
            <p className={style.coloritalic}>Vous avez {age} ans</p>
            <p>L'année prochaine vous aurez {nextage} ans</p>
            <p>{isPair()}</p>
        </div>
    );
};

export default Bienvenue;

//**************************/
//? Déclaration du composant avec la syntaxe "function"
// export default function Bienvenue() {
//    
//};