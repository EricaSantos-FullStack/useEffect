import React, { useEffect, useState} from 'react';
import './App.css';

export default function EffectExample() {
    const [ counter, setCounter ] = useState(0);

    useEffect(() => {
        document.title = counter;
    }, [counter]);



    return (
        <>
        <div className='centralizar'>
            <h5>Trocando os números da tela e o título ao mesmo tempo</h5>
            <h1>{counter}</h1>

            <div className='botao'>

                <button onClick={() => setCounter(counter + 1)}>Adicionar</button>
            </div>
            
        </div>
        </>
    );
}
