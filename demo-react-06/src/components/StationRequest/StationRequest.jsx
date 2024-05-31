import { useEffect } from "react";

//! Composant dédié à la requête
// - Il fait la requête (fetch/axios/...)
// - En fonction de l'état de la requête :
//   - chargement...
//   - résultat de la requête
//   - erreur de la requête



const StationRequest = ({ stationToFind }) => {


    // Effet dans lequel on réalise la requête
    // Attention!
    useEffect(() => {
        // Requête : https://api.irail.be/v1/liveboard/?station=Hourpes&format=json&lang=fr

        axios.get('https://api.irail.be/v1/liveboard/',{
            // 
            params: {
                station: stationToFind,
                lang: 'fr',
                format: 'json'
            }
        }, [stationToFind])
    })

    return(
        <div></div>
    )
}

export default StationRequest;