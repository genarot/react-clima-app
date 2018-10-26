import React, { Component } from 'react';
import Header from '../Header';
import Formulario from '../Formulario/Formulario';

class App extends Component {

  datosConsulta = respuesta => {
    console.log(respuesta);
    
  }
  render() {
    return (
      <div className="App">
        <Header titulo="Clima React" />
        <Formulario datosConsulta={this.datosConsulta} />
      </div>
    );
  }
}

export default App;
