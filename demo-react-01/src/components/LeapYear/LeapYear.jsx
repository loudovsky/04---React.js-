//! Règle des années bissextiles
// Une année est bissextile si elle est divisible par 4 et non divisible par 100, sauf si elle est divisible par 400

const LeapYear = ({year}) => {

    let result;
    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        result = 'leap year'
        }
    else {
        result = 'NOT a leap year'
    }

    return (
        <>
        <p>The {year} is {result}</p>
        </>
    );

};
 
export default LeapYear;