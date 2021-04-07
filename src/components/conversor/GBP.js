import React, {Component}from 'react';
import api from '../../services/api'

export default class GBP extends React.Component {
    state = {
        GBP: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ GBP : res.data.GBP })
        console.log(res.data)
    }

    render() {
        const {GBP} = this.state

        return (
            <div>
                {GBP ? (
                    <div className="container">
                        <h1>Valor da Libra Esterlina agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Libra Esterlina</h3></div>
                                            <div className="card-body">
                                        <h3>GBP$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(GBP.ask).toFixed(2)}</h3>
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