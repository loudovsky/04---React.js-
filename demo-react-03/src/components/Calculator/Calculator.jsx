import { useId, useState } from "react";


const Calculator = () => {
    // Les states pour le formulaire
    const [nb1, setNb1] = useState('');
    const [nb2, setNb2] = useState('');
    const [op, setOp] = useState('+');

    // Les states pour le traitement
    const [result, setResult] = useState(null);
    const [tempSave1, setSave1] = useState(null);
    const [tempSave2, setSave2] = useState(null);
    const [opSave, setOpSave] = useState(null);

    const formId = useId();
    //formId -> :r1:

    const handleCalcSubmit = (e) => {
        // Désactivation du comportement de base
        e.preventDefault();
        console.log('form submit !!!');

        // Traitement...
        let temp;
        const val1 = parseFloat(nb1);
        const val2 = parseFloat(nb2);

        switch(op){
            case '+':
                temp = val1 + val2;
                break;
            case '-':
                temp = val1 - val2;
                break;
            case '*':
                temp = val1 * val2;
                break;
            case '/':
                if(val2 === 0) {
                    temp = 'Math error : zero denominator'
                }
                else {
                    temp = val1 / val2;
                }
                break;
            default:
                temp = 'Error : unsupported operation'
                break;
        };
        setResult(temp)

        

    }

    const handleInputNumber = (e, setInputValue) => {

        const inputValue = e.target.value;

        if(isNaN(inputValue)) {
            //Si ma valeur n'est pas un nombre, le state n'est pas modifié
            return;

        }
        //Modification du state
        setInputValue(e.target.value)
    }

    //! Rendu du composant
    return (
        <div>
            <h2>Calculatrice</h2>
            <form onSubmit={handleCalcSubmit}>
                <div>
                    <label htmlFor={formId+'-nb1'}>Nbr1 </label>
                    <input  id={formId+'-nb1'}
                            type="text" required
                            value={nb1} 
                            onChange={e =>  handleInputNumber(e, setNb1)}/>
                </div>
                <div>
                    <label htmlFor={formId+'-op'}>Opérateur </label>
                    <select id={formId+'-op'} value={op} onChange={e => setOp(e.target.value)}>
                        <option value="+">+</option>
                        <option value="-">-</option>
                        <option value="*">X</option>
                        <option value="/">/</option>
                    </select>
                </div>
                <div>
                    <label htmlFor="">Nbr2 </label>
                    <input type="number"
                            value={nb2} 
                            onChange={e =>  handleInputNumber(e, setNb2)}/>
                </div>
                <button type="submit">Calculer</button>
            </form>
            { result !== null && (
                <>
                    <label htmlFor={formId + '-res'}> Résultat </label>
                    <input id={formId + '-res'}  type="text" value={result} readOnly />
                </>
            )}
        </div>
    );
};

export default Calculator;