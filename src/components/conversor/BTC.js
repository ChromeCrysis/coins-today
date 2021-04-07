import React, {Component}from 'react';
import api from '../../services/api'

export default class BTC extends React.Component {
    state = {
        BTC: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ BTC : res.data.BTC })
        console.log(res.data)
    }

    render() {
        const {BTC} = this.state

        return (
            <div>
                {BTC ? (
                    <div className="container">
                        <h1>Valor do BitcoinCash agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>BitcoinCash Comercial</h3></div>
                                            <div className="card-body">
                                        <h3>BTC$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(BTC.ask).toFixed(2)}</h3>
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