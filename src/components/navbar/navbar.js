import React, {Component}from 'react';
import {Link} from 'react-router-dom'
import * as S from '../navbar/style'

export default class Conversor extends React.Component {

    render(){
        return(
        <S.Navbar className="navbar navbar-expand-lg navbar-dark bg-dark">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Dollar Today</a>
                <S.StyledLink to="/USD">
                    <a className="nav-item">USD</a>
                </S.StyledLink>
                <S.StyledLink to="/CAD">
                    <a className="nav-item">CAD</a>
                </S.StyledLink>
                <S.StyledLink to="/EUR">
                    <a className="nav-item">EUR</a>
                </S.StyledLink>
                <S.StyledLink to="/CNY">
                    <a className="nav-item">CNY</a>
                </S.StyledLink>
                <S.StyledLink to="/JPY">
                    <a className="nav-item">JPY</a>
                </S.StyledLink>
                <S.StyledLink to="/GBP">
                    <a className="nav-item">GBP</a>
                </S.StyledLink>
                <S.StyledLink to="/ARS">
                    <a className="nav-item">ARS</a>
                </S.StyledLink>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
            </div>
        </S.Navbar>
        )
    }
    

}