import React, {Component}from 'react';
import api from '../../services/api'

export default class DOGE extends React.Component {
    state = {
        DOGE: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ DOGE : res.data.DOGE })
        console.log(res.data)
    }

    render() {
        const {DOGE} = this.state

        return (
            <div>
                {DOGE ? (
                    <div className="container">
                        <h1>Valor do DogeCoin agora: </h1>
                            <div className="row">
                                <div className="col">
                                    <div className="card">
                                        <div className="card-header"><h3>DogeCoin Comercial</h3></div>
                                            <div className="card-body">
                                        <h3>DOGE$: 1.00</h3> <h4> = </h4> <h3>R$: {parseFloat(DOGE.ask).toFixed(2)}</h3>
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