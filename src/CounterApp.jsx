import { useState } from 'react';
import PropTypes from 'prop-types';


// const handleAdd = (event) => {
//     console.log(event);
// }

export const CounterApp = ({ value })=>  {
// el useState usa un valor por defecto
const [counter, setCounter] = useState( value );

const agregarValor = ( ) => {
    // forma 1 de cambiar el counter
    // setCounter( counter + 1)

    // forma 2 de cambiar el counter
    setCounter( ( c ) => c + 1);
}

const quitarValor = () => setCounter( counter -1);

const resetValor = () => setCounter( value );

return (
    <>
        <h1> CounterApp </h1>
        <h2> { counter } </h2>

        <button onClick={ agregarValor }>+1</button>
        <button onClick={ quitarValor }>-1</button>
        <button aria-label='btn-reset' onClick={ resetValor }>Reset</button>

    </>
)

}

CounterApp.prototype = {
    value: PropTypes.number.isRequired
}

CounterApp.defaultProps = {
    value: 0
}


