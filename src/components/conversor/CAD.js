import React, {Component}from 'react';
import api from '../../services/api'

export default class CAD extends React.Component {
    state = {
        CAD: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ CAD : res.data.CAD })
        console.log(this.state.CAD)
    }

    render() {
        const {CAD} = this.state

        return (
            <div>
                {CAD ? (
                    <div className="container">
                        <h1>Valor do Dolar Canadense agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Dolar Canadense Comercial</h3></div>
                                            <div className="card-body">
                                        <h3>CAD$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(CAD.ask).toFixed(2)}</h3>
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