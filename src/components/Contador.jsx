import React, {useState} from 'react'
import objCustom from '../custom';

const Contador = () => {

    //STATES
    const [stateNumero, setNumero] = useState(0);

    //FUNCTIONS
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
            <button onClick={objCustom.console}>console 1</button>
            <button onClick={objCustom.consoletwo}>console 2</button>
        </>
    );
}
 
export default Contador;