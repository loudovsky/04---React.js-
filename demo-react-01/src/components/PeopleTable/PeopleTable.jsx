
const PeopleTableHead = () => {
    return (
        <thead>
            <tr>
                <th>Prénom</th>
                <th>Nom</th>
                <th>Age</th>
            </tr>
        </thead>
    )
}

const PeopleTableRow = ({ firstname, lastname, age}) => {
    return (
        <tr>
            <th>{firstname}</th>
            <th>{lastname}</th>
            <th>{age}</th>
        </tr>
    )
}

const PeopleTable = ({ data, title }) => {
    //? Les datas... 
    console.log('data', data);
    
    //? Mapping des data vers le JSW
    //? - Boucle "for i"

    const peopleJSX_1 = [];

    for(let i = 0; i < data.length; i++) {

        //! Transforme l'objet JS vers un composant React (JSX)
        //! - Mapping de chaque propriété manuellement
        // const person = <PeopleTableRow firstname={data[i].firstname}
        //                                lastname={data[i].lastname}
        //                                age={data[i].age} 
        //                                id={data[i].id} />
        //! - Mapping à l'aide de l'opérateur "spread" (Décomposition)
        const person = <PeopleTableRow {...data[i]} key={data[i].id} />
        
        //! Ajout du composant dans le tableau
        peopleJSX_1.push(person);
    }
    console.log ('peopleJSX', peopleJSX_1)
    
    //! - Autre méthode, via la fonction "array.map"
    const peopleJSX_2 = data.map(elem => <PeopleTableRow {...elem} key={elem.id} />);
    console.log('peopleJSX_2', peopleJSX_2);

    return (
        <>
            <h2>{title}</h2>
            <table>
                <PeopleTableHead />
                <tbody>
                    {peopleJSX_2}
                </tbody>
            </table>
        </>
    );
};
export default PeopleTable;