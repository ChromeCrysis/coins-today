import React, {Component}from 'react';
import api from '../../services/api'

export default class EUR extends React.Component {
    state = {
        EUR: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ EUR : res.data.EUR })
        console.log(res.data)
    }

    render() {
        const {EUR} = this.state

        return (
            <div>
                {EUR ? (
                    <div className="container">
                        <h1>Valor do {EUR.name} agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Euro Comercial</h3></div>
                                            <div className="card-body">
                                        <h3>{EUR.code}$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(EUR.ask).toFixed(2)}</h3>
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