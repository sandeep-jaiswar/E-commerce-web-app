import React, { useState, useEffect } from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Product from "../product/product";
import axios from "axios";

function Home() {

  const [productArray, setProductArray]=useState([]);
  useEffect(() => {
    axios.get('http://localhost:8080/product/fetchAll')
          .then((response) => {
            var val =response.data;
            //console.log(val)
            setProductArray(val);
            //console.log(productArray)
          }, (error) => {
            console.log(error);
          });
  },[]);


  return (
    <Card className="border-0">
        <Nav defaultActiveKey="Clothes"
          onSelect={(selectedKey) => alert(`${selectedKey}`)}>
          <Nav.Item>
            <Nav.Link eventKey="Clothes">Clothes</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Mobiles">Mobiles</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Footware">Footware</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Appliances">Appliances</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="Shoes" >Shoes</Nav.Link>
          </Nav.Item>
        </Nav>
      <Card.Body style={{padding:'0.25rem'}}>
          <div className="row ScrollStyle">
          {productArray.map(singleRes =>{
            return  <Product key={singleRes.productId} each={singleRes} />
          })}         
          </div>
      </Card.Body>
    </Card>
  )
}

export default Home;
