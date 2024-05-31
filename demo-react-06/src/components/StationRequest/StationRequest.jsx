import axios from "axios"; 
import { useEffect, useState } from "react";

//! Axios est une librairie qui permet de réaliser des requete ajax
//? Exemple :
//  axios.get('noure.be/demo?limit=42').then(({data}) => ...);
//  axios.get('noure.be/demo', { params: { limit: 42 }}).then(({data}) => ...);
//? Equivalent Fetch
//  fetch('noure.be/demo?limit=42').then(res => res.json()).then(data => ...);

const DashboardItem = ({ stationName, time, delay, platform }) => {
    return(
        <li>
            {stationName} / Quai : {platform}
            <br />
            {time.toLocaleTimeString()} {delay > 0 && `+${delay}`}
            {/*veut dire que si retard supérieur à 0, affichera + '3' si 3 minutes retard */}
        </li>
    )
}

const Dashboard = ({ stationName, updateTime, departuresCount, departures }) => {
    return(
        <>
            <p>Il y a {departuresCount} train(s) au départ de {stationName}</p>
            <p>Liste des départs :</p>
            <ul>
                {departures.map(dep => <DashboardItem key={dep.id} {...dep}/>)}
            </ul>
        </>
    )
}



//! Composant dédié à la requête
// - Il fait la requête (fetch/axios/...)
// - En fonction de l'état de la requête :
//   - chargement...
//   - résultat de la requête
//   - erreur de la requête



const StationRequest = ({ stationToFind }) => {

    const[searchResult, setSearchResult] = useState(null);
    const[isLoading, setLoading] = useState(false);
    const[error, setError] = useState(false);

    // Effet dans lequel on réalise la requête
    // Attention! Celui-ci doit être limité au nom de la gare
    useEffect(() => {
        //! Mise à jour des states avant d'envoyer la requête
        setSearchResult(null);
        setError(false);
        setLoading(true);

        //!Requête AJAX (via Axios)
        // Requête : https://api.irail.be/v1/liveboard/?station=Hourpes&format=json&lang=fr

        axios.get('https://api.irail.be/v1/liveboard/',{
            // L'option «params» permet de gérer les paramètres «get» de la requête via Axios 
            params: {
                station: stationToFind,
                lang: 'fr',
                format: 'json'
            }
        }) .then(({ data }) => {
            
            //? Données brutes reçues depuis la WebAPI
            console.log(data);
            
            //? Convertit les données duans un format adapté à NOS besoins
            const result = {
                stationName: data.station,
                updateTime: new Date(data.timestamp * 1000),
                departuresCount: data.departures.number,
                departures: data.departures.departure.map(
                    dep => ({
                        id: dep.id,
                        stationName: dep.station,
                        time: new Date(dep.time * 1000),
                        delay: dep.delay / 60,
                        platform: dep.platform
                    })
                )
            }
            //? Données converties
            console.log(result);

            //? Mise à jour du state après la requête
            setLoading (false);
            setSearchResult(result);

            //? Mise à jour du state s'il y a une erreur
            setLoading (false);
            setError()
      });
    }, [stationToFind]);


     return(
        <div>
            {isLoading ? (
                <p>Chargement...</p>
            ) : searchResult ? (
                <Dashboard {...searchResult} />
            ) : error ? (
                <p>Erreur lors de la requête</p>
            ) : (
                <p>Aucune donnée...</p>
            )}
        </div>
    );
};

export default StationRequest;
