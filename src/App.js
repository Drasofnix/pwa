import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import html2canvas from 'html2canvas';

function App() {

  const [linea1, setLinea1] = useState();
  const [linea2, setLinea2] = useState();
  const [imagen, setImagen] = useState();
  const change1 = function(evento){
    setLinea1(evento.target.value)
  }
  const change2 = function(evento){
    setLinea2(evento.target.value)
  }
  const changeImagen = function(evento){
    setImagen(evento.target.value)
  }
  const onClikExportar = function(evento){
    html2canvas(document.querySelector("#meme")).then(canvas => {
      var img = canvas.toDataURL("image/png");
      var link = document.createElement('a');
      link.download = 'meme.png';
      link.href = img;
      link.click();
    });
  }

  return (
    <div className="App">
      <select onChange={changeImagen} defaultValue="nose">
        <option value="nose">Bloody Nose</option>
        <option value="duckie">Angry Duckie</option>
        <option value="fire">House in Fire</option>
        <option value="futurama">Futurama</option>
        <option value="history">History</option>
        <option value="wazowski">Wazowski</option>
        <option value="demonizador">El Demonizador</option>
        <option value="matrix">Morfeo</option>
        <option value="philosoraptor">Philosoraptor</option>
        <option value="kirby">Kirby</option>
        <option value="smart">Smart Guy</option>
      </select><br/>

      <input onChange={change1} type="text" placeholder="Linea 1"/><br/>
      <input onChange={change2} type="text" placeholder="Linea 2"/><br/>
      <button onClick={onClikExportar}>Exportar</button>

      <div className='meme' id="meme">
        <span>{linea1}</span><br/>
        <span>{linea2}</span><br/>
        <img src={"/img/"+imagen+".jpg"}/>
      </div>
    </div>
  );
}

export default App;