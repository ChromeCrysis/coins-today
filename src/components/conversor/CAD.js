import React, {Component}from 'react';
import api from '../../services/api'

export default class CAD extends React.Component {
    state = {
        CAD: {},
        valor: 1,
        result: null,
    }
    constructor(props){
        super(props)
        this.handleValor = this.handleValor.bind(this)
    }
    

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ CAD : res.data.CAD })
        //console.log(this.state.CAD)
    }

    async handleValor(event){
        this.setState({
            valor: Number(event.target.value)
        })
    }

    async calcula(){
        this.setState({
            result: this.state.valor * this.state.CAD
        })
        console.log(this.state.valor)
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
                                <label for="#moedaA">{CAD.code}</label>
                                <div className="col">
                                    <input id="moedaA" className="col-md input form-control" type="number"
                                    defaultValue={this.state.valor} onChange={this.handleValor}/>
                                    <button onClick={() => this.calcula()}>Calcular</button>
                                </div>
                                <div className="col">
                                    <h2>=</h2>
                                </div>
                                <label for="#moedaB">{CAD.codein}</label>
                                <div className="col">
                                    <input id="moedaB" className="col-md input form-control" type="number"
                                        onChange={this.state.result} readOnly="true"/>
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