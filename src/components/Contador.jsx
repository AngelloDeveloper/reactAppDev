import React, {useState} from 'react'

const Contador = () => {

    const [stateNumero, setNumero] = useState(0);

    const handleIncrement = () => {
        setNumero(stateNumero + 1);
    }

    const handleDecrement = () => {
        setNumero(stateNumero - 1);
    }

    const handleResetState = () => {
        setNumero(stateNumero * 0);
    }

    return ( 
        <>
            <h3>Hola soy contador {stateNumero}</h3>
            <button onClick={handleIncrement}>Aumentar</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleResetState}>Reset</button>
        </>
    );
}
 
export default Contador;