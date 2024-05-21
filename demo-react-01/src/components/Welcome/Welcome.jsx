import style from './Welcome.module.css';

//! Exemple de composant

const Welcome = (props) => {
    const { firstname, lastname } = props;
     return(
        <div>
            <p className={style.title}>Formation Frontend ⛺</p>
            <p className={style['example-demo']}>Bienvenue {firstname} {lastname}</p>
        </div>
    );
};

export default Welcome;

//**************************/
//? Déclaration du composant avec la syntaxe "function"
// export default function Welcome() {
//    
//};