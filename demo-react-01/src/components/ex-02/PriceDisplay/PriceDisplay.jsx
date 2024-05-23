//! Documentation sur le formatage d'un nombre
//
//

/**
 * Composant pour afficher un prix en euro 
 * @param {price: number} props 
 * @returns {JSX.Element}
 */


const PriceDisplay = ({ price }) => {

    const priceFormatted = price.toLocaleString(undefined, {
        style : "currency",
        currency : "EUR"
    });;

    return (
        <span>{priceFormatted}</span>
    )
}

export default PriceDisplay;