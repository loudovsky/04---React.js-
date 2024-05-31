import { useState } from "react"
import Clock from "../../components/Clock/Clock"
import Today from "../../components/Today/Today"


const ClockOrToday = () => {

    const [clockOrDay, setClockOrDay] = useState(false);

    const handleChange = () => {
        // il faut prendre l'ancienne valeur qui conduit vers la nouvelle valeur. On peut mettre une variable au choix (ici on a choisi 'previousState')
        setClockOrDay ( previousState => !previousState)

    }

    return (
        <>
        <button onClick={handleChange}>Clock or Today</button>
        { clockOrDay ? (
            <Today />
        ) : (
            <Clock />
        ) }
        </>

    )
}

export default ClockOrToday;