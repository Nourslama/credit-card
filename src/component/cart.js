import React from 'react'
import './cart.css'




export default function cart(props) {
    const x=props.x
    return (

    <div className="input">
        <div className="credit-card">
    <h1 className="credit-card-title">CREDIT CARD</h1>
            <div className="credit-cart-chip"></div>
            <div className="credit-card-content">
            <div className="credit-card-text">
            <h2 className="credit-card-number">{x.numero}</h2>
            <h2 className="credit-card-valid-thru">{x.date}</h2>
            <h2 className="credit-card-name">{x.name}</h2>
        </div>
        <div className="credit-card-logo">
            <img src="https://upload.wikimedia.org/wikipedia/commons/b/b7/MasterCard_Logo.svg"/>
        </div>
        </div>
        </div>
        
        </div>
    )
}



