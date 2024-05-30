import { useEffect } from "react"


// Représente 1 invité
const GuestListItem = ({id, firstname, lastname}) => {

    useEffect(() =>{

         // Effet () 
         console.log(`EFFET : GuestListItem (${id})`);

         // Exe

        return () => {
            // Cleanup de l'effet 
            console.log(`CLEAN : GuestListItem (${id})`);
        }

    }, [id])

    return (
        <article>
            <span>{firstname}</span> <span>{lastname}</span>
        </article>
    )
}

// Représente la liste des invités
const GuestList = ({
    guests = [] //Props "guests", qui est l'ensemble des invités à afficher
}) => {
    return (
        <section>
            {guests.map(
                (guest, index) => <GuestListItem key={guest.id} {...guest}/>
            )}
        </section>
    )
}

export default GuestList;