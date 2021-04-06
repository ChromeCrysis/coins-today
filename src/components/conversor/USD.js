import React, {Component, useEffect}from 'react';
import api from '../../services/api'

export default class USD extends React.Component {
    state = {
        USD: {},
        USDT: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ USD : res.data.USD, USDT: res.data.USDT })
        console.log(this.state.USDT)
    }

    render() {

        const {USD} = this.state
        const {USDT} = this.state

        return (
            <div>
                <br/>
                <label htmlFor="#moedaA">Valor em R$</label>
                <input type="number" id="moedaA"/>
                <h3></h3>
                {USD, USDT ? (
                    <div className="container">
                        <h1>Valor do Dolar Americano agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Dolar Americano Comercial</h3></div>
                                            <div className="card-body">
                                        <h3>US$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(USD.ask).toFixed(2)}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Dolar Americano Turismo</h3></div>
                                            <div className="card-body">
                                        <h3>US$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(USDT.ask).toFixed(2)}</h3>
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