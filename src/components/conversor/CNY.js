import React, {Component}from 'react';
import api from '../../services/api'

export default class CNY extends React.Component {
    state = {
        CNY: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ CNY : res.data.CNY })
        console.log(res.data)
    }

    render() {
        const {CNY} = this.state

        return (
            <div>
                <br/>
                <label htmlFor="#moedaA">Valor em R$</label>
                <input type="number" id="moedaA"/>
                <h3></h3>
                {CNY ? (
                    <div className="container">
                        <h1>Valor do Yuan Chinês agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Yuan Chinês</h3></div>
                                            <div className="card-body">
                                        <h3>EU$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(CNY.ask).toFixed(2)}</h3>
                                        </div>
                                    </div>
                                </div>
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>Yuan Chinês</h3></div>
                                            <div className="card-body">
                                        <h3>EU$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(CNY.ask).toFixed(2)}</h3>
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