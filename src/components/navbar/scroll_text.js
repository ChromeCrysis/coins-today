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
        const {ARS, BTC, CAD, CNY, DOGE, EUR, GBP, JPY, USD, USDT} = this.state
        return(
            <div className="row bg-dark" style={{
                'border-top': '4px solid #fff'
            }}>
                <S.ScrollText className="container"> 
                    {ARS, BTC, CAD, CNY, DOGE, EUR, GBP, JPY, USD, USDT ? (
                        <div className="row">
                            <div className="col">
                                <p>ARS: R$:{ARS.ask}</p>
                            </div>
                            <div className="col">
                                <p>CAD: R$:{CAD.ask}</p>
                            </div>
                            <div className="col">
                                <p>BTC: R$:{BTC.ask}</p>
                            </div>
                            <div className="col">
                                <p>CNY: R$:{CNY.ask}</p>
                            </div>
                            <div className="col">
                                <p>DOGE: R$:{DOGE.ask}</p>
                            </div>
                            <div className="col">
                                <p>EUR: R$:{EUR.ask}</p>
                            </div>
                            <div className="col">
                                <p>GBP: R$:{GBP.ask}</p>
                            </div>
                            <div className="col">
                                <p>JPY: R$:{JPY.ask}</p>
                            </div>
                            <div className="col">
                                <p>USD: R$:{USD.ask}</p>
                            </div>
                            <div className="col">
                                <p>USDT: R$:{USDT.ask}</p>
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