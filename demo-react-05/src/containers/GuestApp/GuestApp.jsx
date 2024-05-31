import { useEffect, useState } from "react";
import GuestForm from "../../components/GuestForm/GuestForm"
import { nanoid } from "nanoid";
import GuestList from "../../components/GuestList/GuestList";


const GuestApp = () => {

    //! State pour stocker les invités
    const [guests, setGuests] = useState([]);

    //! Effet pour modifier le title du site
    //*  => Afficher le nombre d'invités
    //* L'effet se déclenche uniquement quand le nombre d'invités change
    //* Si un autre state, cela n'aura pas d'impact
    
    useEffect(
        // Le code de l'effet
        () => {
        console.log(`Effet : GuestApp`);

        //Modification du DOM
        document.title = `Invités : ${guests.length}`
        }, 
        // La dépendance de l'effet
        [guests.length]
    )

    //! Gestion de l'ajout des invités
    const handleAddGuest = (data) => {
        // Objet à ajouter dans la list
        const newGuest = {
            ...data,      //Toutes les données du formulaire
            id: nanoid(7)  //Id unique généré par "nanoid", "7" pour générer un id en 7 caractères
        }

        //ajout (au début) de l'invité à la list 
        setGuests(guests =>  [newGuest, ...guests])

        // autre manière d'écrire [newGuest].concat(...guests);
    }

    //! Gestion de la suppression de TOUS les invités

    const handleClearGuest = () => {
        setGuests([]);    
    };

    //! Render
    return (
        <div>
            <h2>Ajouter un invité</h2>
            <GuestForm onAddGuest={handleAddGuest}/>

            <h2>Liste des invités</h2>
            <button onClick={handleClearGuest}>Vider la liste</button>
            <GuestList  guests={guests} />
        </div>
    );
};

export default GuestApp;