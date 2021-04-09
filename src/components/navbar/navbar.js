import React, {Component}from 'react';
import {Link} from 'react-router-dom'

import * as S from '../navbar/style'
import money from '../navbar/assets/money.png'

export default class Navbar extends React.Component {

    render(){
        return(
        <S.Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <S.Money src={money}/>
                <a class="navbar-brand" href="">Dollar Today</a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <div className="row">
                        <div className="col-md-6">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Moedas
                        </a>
                        <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <S.StyledLink to="/ARS">
                                <li><a class="dropdown-item">Peso Argentino</a></li>
                            </S.StyledLink>
                            <S.StyledLink to="/CAD">
                                <li><a class="dropdown-item">Dolar Canadense</a></li>
                            </S.StyledLink>
                            <S.StyledLink to="/CAD">
                                <li><a class="dropdown-item">Yuan Chinês</a></li>
                            </S.StyledLink>
                            <S.StyledLink to="/EUR">
                                <li><a class="dropdown-item">Euro</a></li>
                            </S.StyledLink>
                            <S.StyledLink to="/GBP">
                                <li><a class="dropdown-item">Libra Esterlina</a></li>
                            </S.StyledLink>
                            <S.StyledLink to="/JPY">
                                <li><a class="dropdown-item">Iene Japones</a></li>
                            </S.StyledLink>
                            <S.StyledLink to="/USD">
                                <li><a class="dropdown-item">Dolar Americano</a></li>
                            </S.StyledLink>
                        </ul>
                        </li>
                    </ul>
                    </div>
                        <div className="col-md-6">
                            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                                <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Crypto Moedas
                                </a>
                                <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <S.StyledLink to="/crypto/BTC">
                                        <li><a class="dropdown-item">Bitcoin Cash</a></li>
                                    </S.StyledLink>
                                    <S.StyledLink to="/crypto/DOGE">
                                        <li><a class="dropdown-item">Dogecoin</a></li>
                                    </S.StyledLink>
                                </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </S.Navbar>
        )
    }
    

}