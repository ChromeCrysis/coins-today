import React, {Component}from 'react';
import {Link} from 'react-router-dom'
import api from '../../services/api'

import * as S from '../navbar/style'

export default class ScrollText extends React.Component {
    state = {
        ARS: {},
        BTC: {},
        CAD: {},
        CNY: {},
        DOGE: {},
        EUR: {},
        GBP: {},
        JPY: {},
        USD: {},
        USDT: {},
    }

    async componentDidMount(){
        const res = await api.get('/all')

        this.setState({ ARS : res.data.ARS, BTC : res.data.BTC, CAD : res.data.CAD
        , CNY : res.data.CNY, DOGE : res.data.DOGE, EUR : res.data.EUR, GBP : res.data.GBP,
        JPY : res.data.JPY, USD : res.data.USD, USDT : res.data.USDT
     })
        //console.log(res.data)
    }

    render(){
        const {ARS, BTC, CAD, CNY, DOGE, EUR, GBO, JPY, USD, USDT} = this.state
        return(
            <div className="row bg-dark" style={{
                'border-top': '4px solid #fff'
            }}>
                <S.ScrollText className="container"> 
                    {ARS, BTC, CAD ? (
                        <div className="row">
                            <div className="col">
                                <p>Peso Argentino: R$:{ARS.ask}</p>
                            </div>
                            <div className="col">
                                <p>Dolar Canadense: R$:{CAD.ask}</p>
                            </div>
                            <div className="col">
                                <p>Bitcoin: R$:{BTC.ask}</p>
                            </div>
                        </div>
                    ) : (
                        <p>Loading Values</p>
                    )}
                </S.ScrollText>
            </div>
        
        )
    }
    

}