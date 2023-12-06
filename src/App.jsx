import React, { useState } from 'react';
import './App.css';

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setImc] = useState(null);
  const [classificacao, setClassificacao] = useState('');

  const calcularIMC = () => {
    if (altura && peso) {
      const alturaMetros = altura / 100;
      const imcCalculado = peso / (alturaMetros * alturaMetros);
      setImc(imcCalculado.toFixed(2));

      // Classificação do IMC
      if (imcCalculado < 18.5) {
        setClassificacao('Magreza');
      } else if (imcCalculado < 24.9) {
        setClassificacao('Normal');
      } else if (imcCalculado < 29.9) {
        setClassificacao('Sobrepeso');
      } else if (imcCalculado < 34.9) {
        setClassificacao('Obesidade Grau 1');
      } else if (imcCalculado < 39.9) {
        setClassificacao('Obesidade Grau 2');
      } else {
        setClassificacao('Obesidade Grau 3');
      }
    }
  };

  return (
    <div className="App">
      <h1>Calculadora de IMC</h1>
      <label>
        Altura(cm):
        <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
      </label>
      <br />
      <label>
        Peso(kg):
        <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
      </label>
      <br />
      <button onClick={calcularIMC}>Calcular IMC</button>
      {imc !== null && (
        <div>
          <h2>Resultado:</h2>
          <p>IMC: {imc}</p>
          <p>Classificação: {classificacao}</p>
        </div>
      )}
    </div>
  );
}

export default App;
