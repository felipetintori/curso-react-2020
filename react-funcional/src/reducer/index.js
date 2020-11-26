import React, {useState} from 'react';

import useStore from './somaReducer'


function ReducerHook() {

  const [numero, setNumero] = useState('')
  const [ segundoNumero, setSegundoNumero] = useState('')
  const [store, dispatch] = useStore()


  const somar = () => {
    const numeroInt = parseInt(numero)
    const segundoNumeroInt = parseInt(segundoNumero)

    dispatch({
        type: 'SOMA',
        payload: numeroInt + segundoNumeroInt
    })

  
  }

  const subtrair = () => {
    const numeroInt = parseInt(numero)
    const segundoNumeroInt = parseInt(segundoNumero)

    dispatch({
        type: 'SUBTRAIR',
        payload: numeroInt - segundoNumeroInt
    })
  }



  
  return (
    <div >
      numero 1 <br/>
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} /><br/>
      numero 2 <br/>
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /><br/>
      <button onClick={somar}>Somar</button> <br/>
      <button onClick={subtrair}>Subtrair</button> <br/>
      resultado <br/>
      <input type="text" value={store.resultado} /><br/>
      
    </div>
  );
}

export default ReducerHook;