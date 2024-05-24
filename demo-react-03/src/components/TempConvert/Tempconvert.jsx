import { useState } from "react";


const TempConvert = () => {
    // Les states pour le formulaire
    const [tempInput, setTempInput] = useState('');
    const [format, setFormat] = useState('fahrenheit');

    // Les states pour le traitement
    const [tempResult, setTempResult] = useState(null);
    const [tempSave, setTempSave] = useState(null);
    const [formatSave, setFormatSave] = useState(null);

    const handleTempSubmit = (e) => {
        // Désactivation de l'event "submit" du navigateur
        e.preventDefault();
        console.log('form submit !!!');

        // Traitement...
        const temp = parseFloat(tempInput);

        switch(format){
            case 'fahrenheit':
                // Formule : (0°C x 9/5) + 32 = 32 °F
                setTempResult((temp * 9/5) + 32);
                break;
            case 'kelvin':
                // Formule : 0°C + 273,15 = 273,15 K
                setTempResult(temp + 273.15);
                break;
            default:
                
                break;
        }
        setTempSave(tempInput);
        setFormatSave(format === 'fahrenheit' ? '°F' : '°K')
;
    }
    return (
        <div>
            <h2>Convertion de températures</h2>
            <form onSubmit={handleTempSubmit}>
                <div>
                    <label htmlFor="">Température (°C) </label>
                    <input type="number"
                            value={tempInput} 
                            onChange={e => setTempInput(e.target.value)}/>
                </div>
                <div>
                    <label>Format dest </label>
                    <select value={format} onChange={e => setFormat(e.target.value)}>
                        <option value="fahrenheit">Fahrenheit</option>
                        <option value="kelvin">Kelvin</option>
                    </select>
                </div>
                <button type="submit">Convertir...</button>
            </form>
            { tempResult !== null && (
                
                <p>{tempSave}°C vaut {tempResult} {formatSave}</p>
            
            )}
        </div>
    );
};

export default TempConvert;