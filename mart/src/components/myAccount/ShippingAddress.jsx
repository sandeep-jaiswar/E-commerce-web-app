import Card from 'react-bootstrap/Card'
function ShippingAddress() {
    function editClick(e){
        console.log('edit clicked')
    }
    return (
        <Card>
            <Card.Header>Shipping Address Details<span style={{float:'right'}}><img onClick={editClick} style={{height:'20px',width:'20px', cursor:'pointer'}} src='https://cdn3.iconfinder.com/data/icons/leto-design-tools/64/__pencil-128.png'/></span> </Card.Header>
            <Card.Body>
            <blockquote className="blockquote mb-0 ScrollStyle">
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer posuere
                </p>
                <footer className="blockquote-footer">
                Someone famous in <cite title="Source Title">Source Title</cite>
                </footer>
            </blockquote>
            </Card.Body>
      </Card>
    )
}

export default ShippingAddress;