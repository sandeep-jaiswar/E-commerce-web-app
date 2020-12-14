import React from 'react';
import Button from 'react-bootstrap/Button';

function Product(props) {
    return (
        <div className="col-sm-3 productCard" style={{marginTop:'1%'}}>
        <div className="card" style={{width: '14rem'}}>
        <img className="card-img-top img-fluid productImg"  src={props.each.image} alt="product"/>
        <div className="productDetailsButton">
            <Button size="sm" variant="outline-primary">View</Button>{' '}
        </div>
        <div className="card-block">
            <h6 className="card-title" style={{textAlign:'center'}}>{props.each.name}</h6>
            <p className="card-text" style={{textAlign:'center',fontWeight:'bold'}}>RS. {props.each.price}</p>
        </div>
        </div>
      </div>
    )
}

export default Product
