import React, { Component } from 'react';
import Header from '../Header';
import Formulario from '../Formulario/Formulario';
import Error from '../Error';
import Clima from '../Clima';

class App extends Component {

  constructor(props){
    super(props);

    this.state= {
      error:'',
      consulta: {},
      resultado: {},
      apiKey: 'ea3a2e3b4b38941604bc75f61d41ea48'
    }
  }

  consultarApi = () => {
    const {ciudad, pais} = this.state.consulta;
    if ( !ciudad || !pais) return null;

    let url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${this.state.apiKey}`
    
    let myInit = {
      method: 'GET', 
      mode: 'cors'
    }
    fetch(url, myInit)
    .then( response => {
      // console.log(response.json());
      return response.json();
    })
    .then( datos => {
      console.log(datos);
      this.setState({
        resultado: datos
      })
    })
    .catch(err=> {
      console.error(err);
      
    })
    // this.setState({ consulta:{}})
  }

  componentDidUpdate(prevProps, prevState) {
      // console.log('prevProps');
      // console.log(prevProps);
      // console.log('prevState');
      // console.log(prevState);
      if ( prevState.consulta !== this.state.consulta ) {
        this.consultarApi();
      }
  }

  componentDidMount() {
    this.setState({ 
      error: false
    })
  }


  datosConsulta = respuesta => {
    console.log(respuesta);
    if ( respuesta.ciudad === '' || respuesta.pais === '' ) {
      this.setState({
        error: true
      })
    }  else {
      console.log('TOdo correcto');
      this.setState({
        consulta: respuesta,
        error: false
      })
    }
  }
  render() {
    const error = this.state.error;
    let resultado;

    if (error ) {
      resultado = <Error mensaje='Ambos campos son obligatorios'/>
    } else {
      resultado =<Clima resultado = {this.state.resultado}/>
    }
    return (
      <div className="App">
        <Header titulo="Clima React" />
        <Formulario datosConsulta={this.datosConsulta} />
        {resultado}
      </div>
    );
  }
}

export default App;
