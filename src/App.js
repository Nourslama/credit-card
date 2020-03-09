import React, { Component } from 'react';

import CreditCard from './component/cart'

import './App.css';
import { findAllByPlaceholderText } from '@testing-library/react';



export default class App extends Component {
  constructor (props){
    super(props)
    this.state={
      name:'Foulen',
      numero:'**** **** **** ****',
      date:'**-****'
    }}
    handleChange=(e)=>{
    let reg=/^[A-Za-z]+$/
      if (e.target.value.length<18 && reg.test(e.target.value)){
        this.setState({
          name:(e.target.value).toUpperCase()
        }) }
      }
     
      handleChangenumero=(e)=>{
        let reg=/^[0-9]+$/
        if (e.target.value.length<17 && reg.test(e.target.value)){
        this.setState({
          numero:e.target.value.replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim()

        }) }
      }
      
      handleChangedate=(e)=>{

    if (e.target.value.slice(0,2)<13){
        this.setState({
          date:e.target.value.slice(0,2)+'/'+ e.target.value.slice(2,4).replace(/[^\dA-Z]/g, '').trim()
        }) } 
        
      }
  render() {
    return (
      <div>
         <CreditCard x={this.state}/>
         <div className="carre">
         <label>Nom</label>
      <input type="text" placeholder="Nom" onChange={this.handleChange}/>
      <label>Numero de la carte</label>
      <input maxLength="16"  placeholder="Numero de la carte" onChange={this. handleChangenumero}/>
      <label>date d'expidation</label>
      <input  maxLength="4"  placeholder="date d'expidation" onChange={ this.handleChangedate}/></div>
      </div>
    )
  }
}




