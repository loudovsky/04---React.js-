
const PeopleTableHead = () => {
    return (
        <thead>
            <th>Prénom</th>
            <th>Nom</th>
            <th>Age</th>
        </thead>
    )
}

const PeopleTable = ({ data, title }) => {
    return (
        <>
            <h2>{title}</h2>
            <table>
                <PeopleTableHead />
            </table>
        </>
    )
}
export default PeopleTable;