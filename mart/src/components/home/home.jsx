import React from 'react';
import CardDeck from 'react-bootstrap/CardDeck';
import Card from 'react-bootstrap/Card';
import Nav from 'react-bootstrap/Nav';
import Button from 'react-bootstrap/Button';

function home() {
  return (
    <Card className="border-0">
        <Nav defaultActiveKey="Clothes"  variant="pills"
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
      <Card.Body>
          <div className="row">
              <div className="col-sm-3 productCard">
                <div className="card">
                <img className="card-img-top img-fluid productImg" style={{height: "280px", width: "100%"}} src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/11099538/2019/12/16/de5a1e02-d817-40f3-8db9-695befc46c2f1576473716354-UF-Women-Maroon-Printed-Maxi-Dress-7821576473714711-1.jpg" alt="Card image cap"/>
                <div className="productDetailsButton">
                    <Button size="sm" variant="outline-primary">View</Button>{' '}
                </div>
                <div className="card-block">
                    <h4 className="card-title">Product Name</h4>
                    <p className="card-text">RS. Price</p>
                    <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                </div>
                </div>
              </div>
          </div>
        {/* <CardDeck>
          <Card>
            <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/12714236/2020/11/21/09e4cc66-ea2c-41ec-94dd-33b73c67504f1605951546170MensCottonRegularPrintedOliveTshirtJacketsJackJonesMenJeansJ1.jpg" />
            <Card.Body >
              <Card.Title>GAP Tee</Card.Title>
              <Card.Text> RS. 999</Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7226541/2018/9/4/10ad7ef6-b0e3-462b-87bf-936f932d78b31536052725027-GAP-Mens-Slim-Fit-Poplin-Shirt-in-Stretch-9541536052724846-1.jpg" />
            <Card.Body>
              <Card.Title>GAP men shirt</Card.Title>
              <Card.Text>
              RS. 999
              </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/7226570/2018/9/4/829ee04b-9e7b-4b39-bb4e-0c1837f5ff291536046407214-GAP-Men-Navy-Blue-Slim-Fit-Checked-Casual-Shirt-1281536046407022-1.jpg" />
            <Card.Body>
              <Card.Title>GAP men shirt</Card.Title>
              <Card.Text>
              RS. 999
          </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://assets.myntassets.com/h_1440,q_90,w_1080/v1/assets/images/10207419/2019/10/16/eae12dae-9f7c-45d6-aa78-539175bb2daa1571225187573-W-Women-Dresses-271571225184937-1.jpg" />
            <Card.Body>
              <Card.Title>Floral Printed Maxi Dress</Card.Title>
              <Card.Text>
              RS. 999
          </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
          <Card>
            <Card.Img variant="top" src="https://assets.myntassets.com/f_webp,dpr_1.0,q_60,w_210,c_limit,fl_progressive/assets/images/productimage/2019/11/20/e05fb40e-0c63-4da0-a514-672b42bae8cd1574191969626-1.jpg" />
            <Card.Body>
              <Card.Title>Sleeve Wrap Dress</Card.Title>
              <Card.Text>
              RS. 999
          </Card.Text>
            </Card.Body>
            <Card.Footer>
              <small className="text-muted">Last updated 3 mins ago</small>
            </Card.Footer>
          </Card>
        </CardDeck> */}
      </Card.Body>
    </Card>

  )
}

export default home
