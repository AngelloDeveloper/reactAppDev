import React, {useState} from 'react'

const Lista = () => {

    const [arrState, setArrState] = useState([1,2,3,4,5,6,7]);

    const handleAddNumber = () => {
        let increment = arrState.length + 1;
        setArrState([
            ...arrState,
            increment
        ]);
    }

    return(
        <>
            <p>lista</p>
            <button onClick={handleAddNumber}>Add Number</button>
            {
                arrState.map((numero, index) => {
                    return (
                        <p key={index}>{numero} - {index}</p>
                    );
                })
            }
        </>
    );

}

export default Lista;