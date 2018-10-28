import React,{PureComponent} from 'react';
import propTypes from 'prop-types';

class Clima extends PureComponent {

    mostrarResultado = () => {
        const {name, weather, main} = this.props.resultado;
        if (!name | !weather ) return null;
        const [{icon}] = weather;
        // console.log(primero);
        
        const kelvin = 273.15;
        const urlIcon = `http://openweathermap.org/img/w/${icon}.png`

        return <div className="row">
                    <div className="resultado col s12 m8 l6 offset-m2 offset-l3">
                        <div className="car-panel light-blue align-center">
                            <span className="white-text">
                                <h2>Resultado Clima de {name}</h2>
                                <p className="temperatura">
                                    Actual: {(main.temp - kelvin).toFixed(2)}&deg;C
                                    <img src={urlIcon} alt={"Clima de " + name}/>
                                </p>
                                <p>
                                    Max. {(main.temp_max - kelvin).toFixed(2)} &deg;C
                                </p>
                                <p>
                                    Min. {(main.temp_min - kelvin).toFixed(2)} &deg;C
                                </p>
                            </span>
                        </div>
                    </div>
                </div>
    }

    render() {
        return (
            <div className="container">
                {this.mostrarResultado(this.props.resultado) }
            </div>
        );
    }
}

Clima.propTypes ={
    resultado: propTypes.object.isRequired
}
export default Clima;