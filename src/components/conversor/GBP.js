import React, {Component}from 'react';
import api from '../../services/api'

import * as S from './stye'

export default class GBP extends React.Component {
    state = {
        GBP: {},
        moedaA_valor: "",
        moedaB_valor: 0,
    }

    converter = this.converter.bind(this)

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ GBP : res.data.GBP })
        console.log(res.data)
    }

    async converter(){
        let moedaB_valor = (parseFloat(this.state.moedaA_valor * this.state.GBP.ask))
        this.setState({ moedaB_valor })
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
                            <div>
                                <br/>
                                <hr style={{
                                    backgroundColor: '#000'
                                }}/>
                            <h1>Calculadora</h1>
                            <div className="row">
                                <label for="#moedaA">{GBP.code}</label>
                                <div className="col">
                                    <input id="moedaA" className="col-md input form-control"
                                    defaultValue="0"
                                        onChange={(event) =>{
                                            this.setState({moedaA_valor: event.target.value})
                                        }}
                                    />  
                                </div>
                                <div className="col">
                                    <h2>=</h2>
                                </div>
                                <label for="#moedaB">{GBP.codein}</label>
                                <div className="col">
                                    <input id="moedaB" className="col-md input form-control" 
                                    value={parseFloat(this.state.moedaB_valor).toFixed(2)} onChange={this.state.moedaB_valor} contentEditable="false"/>
                                </div>
                            </div>
                            <S.Converter>
                                <S.Convert_Button onClick={this.converter}
                                    className="form-control col-md-2"
                                >Converter</S.Convert_Button>
                            </S.Converter>
                        </div>
                    </div>
                ): (
                    <h1>Carregando...</h1>
                )}
            </div>
        )
  }
}