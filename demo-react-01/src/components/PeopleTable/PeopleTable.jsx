
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
        const person = <PeopleTableRow {...data[i]} />
        
        peopleJSX_1.push(person);
    }
    console.log ('peopleJSX', peopleJSX_1)
    
    return (
        <>
            <h2>{title}</h2>
            <table>
                <PeopleTableHead />
                <tbody>
                    {peopleJSX_1}
                </tbody>
            </table>
        </>
    );
};
export default PeopleTable;