import React, {Component}from 'react';
import api from '../../services/api'

export default class ARS extends React.Component {
    state = {
        ARS: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ ARS : res.data.ARS })
        console.log(res.data)
    }

    render() {
        const {ARS} = this.state

        return (
            <div>
                <br/>
                <label htmlFor="#moedaA">Valor em R$</label>
                <input type="number" id="moedaA"/>
                <h3></h3>
                {ARS ? (
                    <div className="container">
                        <h1>Valor do Peso Argentino agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Peso Argentino Comercial</h3></div>
                                            <div className="card-body">
                                        <h3>EU$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(ARS.ask).toFixed(2)}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Peso Argentino Turismo</h3></div>
                                            <div className="card-body">
                                        <h3>EU$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(ARS.ask).toFixed(2)}</h3>
                                        </div>
                                    </div>
                                    </div>
                            </div>
                    </div>
                ): (
                    <h1>Carregando...</h1>
                )}
            </div>
        )
  }
}