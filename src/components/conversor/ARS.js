import React, {Component}from 'react';
import api from '../../services/api'

export default class ARS extends React.Component {
    state = {
        ARS: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ ARS : res.data.ARS })
        //console.log(res.data)
    }

    render() {
        const {ARS} = this.state

        return (
            <div>
                {ARS ? (
                    <div className="container">
                        <h1>Valor do {ARS.name} agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Peso Argentino Comercial</h3></div>
                                            <div className="card-body">
                                        <h3>{ARS.code}$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(ARS.ask).toFixed(2)}</h3>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <br></br>
                            <hr style={{
                                backgroundColor: 'black'
                            }}/>
                            <hr style={{
                                backgroundColor: 'black'
                            }}/>
                        <div>
                            <h1>Calculadora</h1>
                            <div className="row">
                                <label for="#moedaA">{ARS.code}</label>
                                <div className="col">
                                    <input id="moedaA" className="col-md input form-control" type="number"/>
                                </div>
                                <div className="col">
                                    <h2>=</h2>
                                </div>
                                <label for="#moedaB">{ARS.codein}</label>
                                <div className="col">
                                    <input id="moedaB" className="col-md input form-control" type="number"
                                    value="" contentEditable="false"/>
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