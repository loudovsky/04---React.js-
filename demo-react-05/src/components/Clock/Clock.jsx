import { useEffect, useState } from "react";

const Clock = () => {
    const [date, setDate] = useState(new Date());
    const hours = date.getHours().toLocaleString('fr', {minimumIntegerDigits : 2});
    const minutes = date.getMinutes().toLocaleString('fr', {minimumIntegerDigits : 2 });
    const seconds = date.getSeconds().toLocaleString('fr', {minimumIntegerDigits : 2}); 
    console.log(hours + minutes + seconds);
    

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setDate(new Date())
        }, 200);

        //* Effet de nettoyage
        return(() => {
            clearTimeout(timeoutId);
        }) 
    })
    
   

     // Render de l'horloge
    return (
        <>
        <p>{hours} : {minutes} : {seconds}</p>
        </>
    )
};

export default Clock;