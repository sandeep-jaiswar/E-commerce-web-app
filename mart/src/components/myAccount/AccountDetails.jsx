import Card from 'react-bootstrap/Card'
function AccountDetails() {

    function editClick(e){
        console.log('edit clicked')
    }
    return (
        <Card>
            <Card.Header>Account Details <span style={{float:'right'}}><img onClick={editClick} style={{height:'20px',width:'20px', cursor:'pointer'}} src='https://cdn3.iconfinder.com/data/icons/leto-design-tools/64/__pencil-128.png'/></span> </Card.Header>
            <Card.Body>
            <form>
                <label>
                Email : 
                <input className="input" name="email" type="text" />
                </label>
                <br /><br />
                <label>
                First Name : 
                <input className="input" name="email" type="text" />
                </label>
                <br /><br />
                <label>
                Last Name : 
                <input className="input" name="email" type="text" />
                </label>
                <br /><br />
                <label>
                Contact no : 
                <input className="input" name="email" type="text" />
                </label>
                <br />
            </form>
            </Card.Body>
      </Card>
    )
}

export default AccountDetails;