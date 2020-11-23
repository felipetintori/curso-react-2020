import React, {useState} from 'react';


function App() {

  const [numero, setNumero] = useState(0)
  const [ segundoNumero, setSegundoNumero] = useState(10)
  const [resultado, setResultado] = useState(15)

  const somar = () => {
    const numeroInt = parseInt(numero)
    const segundoNumeroInt = parseInt(segundoNumero)

    setResultado(numeroInt + segundoNumeroInt)
  }

  
  return (
    <div >
      numero 1 <br/>
      <input type="text" value={numero} onChange={e => setNumero(e.target.value)} /><br/>
      numero 2 <br/>
      <input type="text" value={segundoNumero} onChange={e => setSegundoNumero(e.target.value)} /><br/>
      <button onClick={somar}>Somar</button> <br/>
      resultado <br/>
      <input type="text" value={resultado} /><br/>
      
    </div>
  );
}

export default App;
