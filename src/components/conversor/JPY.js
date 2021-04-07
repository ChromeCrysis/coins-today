import React, {Component}from 'react';
import api from '../../services/api'

export default class JPY extends React.Component {
    state = {
        JPY: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ JPY : res.data.JPY })
        console.log(res.data)
    }

    render() {
        const {JPY} = this.state

        return (
            <div>
                {JPY ? (
                    <div className="container">
                        <h1>Valor do Iene Japonês agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Iene Japonês Comercial</h3></div>
                                            <div className="card-body">
                                        <h3>JPY$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(JPY.ask).toFixed(2)}</h3>
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