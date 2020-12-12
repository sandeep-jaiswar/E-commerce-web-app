import React,{useState} from 'react';
import { Card, ListGroup } from 'react-bootstrap';
import AccountDetails from "./AccountDetails";
import BillingAddress from "./BillingAddress";
import ChangePassword from "./ChangePassword";
import DeleteAccount from "./DeleteAccount";
import Privacy from "./Privacy";
import ShippingAddress from "./ShippingAddress";


function Account() {
    const [accountDtlsFlag,setAccountDtlsFlag]=useState(true);
    const [chngPassFlag,setChngPassFlag]=useState(false);
    const [billingAddFlag,setBillingAddFlag]=useState(false);
    const [shipAddFlag,setShipAddFlag]=useState(false);
    const [privacyFlag,setPrivacyFlag]=useState(false);
    const [delAccFlag,setDelAccFlag]=useState(false);

    function handler(a,b,c,d,e,f){
        setAccountDtlsFlag(a);
        setChngPassFlag(b);
        setBillingAddFlag(c);
        setShipAddFlag(d);
        setPrivacyFlag(e);
        setDelAccFlag(f);
    }

    return (
        <div className="row mx-auto" style={{ paddingTop: '2%'}}>
            <div className="col-sm-4">
                <img src="https://225508-687545-raikfcquaxqncofqfm.stackpathdns.com/wp-content/uploads/2019/09/Nushrat-Bharucha-picture.jpg" style={{ height: '150px', width: '150px', display: 'block', margin: 'auto' }} className="rounded-circle" alt="Cinque Terre" />
                <h3 style={{ textAlign: 'center' }}>User Name</h3><br />
                <Card style={{ width: '18rem',display:'block',margin:'auto' }}>
                    <ListGroup variant="flush">
                        <ListGroup.Item><span><img src='https://cdn1.iconfinder.com/data/icons/utilities-part-1/64/account-128.png' style={{ height: '20px', width: '20px' }}/></span><span style={{marginLeft:'2%'}}>Account</span><span style={{float:'right'}}><img src='https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/170_arrow_next_right-256.png' style={{ height: '20px', width: '20px',cursor:'pointer' }} onClick={()=>handler(true,false,false,false,false,false)}/></span></ListGroup.Item>
                        <ListGroup.Item><span><img src='https://cdn3.iconfinder.com/data/icons/business-and-employment-2/48/account_settings_male_man_options_user-256.png' style={{ height: '20px', width: '20px' }}/></span><span style={{marginLeft:'2%'}}>Change Password</span><span style={{float:'right'}}><img src='https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/170_arrow_next_right-256.png' style={{ height: '20px', width: '20px',cursor:'pointer' }} onClick={()=>handler(false,true,false,false,false,false)}/></span></ListGroup.Item>
                        <ListGroup.Item><span><img src='https://cdn3.iconfinder.com/data/icons/flat-icons-web/40/Mastercard-128.png' style={{ height: '20px', width: '20px' }}/></span><span style={{marginLeft:'2%'}}>Billing Address</span><span style={{float:'right'}}><img src='https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/170_arrow_next_right-256.png' style={{ height: '20px', width: '20px',cursor:'pointer'}} onClick={()=>handler(false,false,true,false,false,false)}/></span></ListGroup.Item>
                        <ListGroup.Item><span><img src='https://cdn4.iconfinder.com/data/icons/delivery-shipping-4/32/delivery-25-128.png'style={{ height: '20px', width: '20px' }}/></span><span style={{marginLeft:'2%'}}>Shipping Address</span><span style={{float:'right'}}><img src='https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/170_arrow_next_right-256.png' style={{ height: '20px', width: '20px',cursor:'pointer'}} onClick={()=>handler(false,false,false,true,false,false)}/></span></ListGroup.Item>
                        <ListGroup.Item><span><img src='https://cdn4.iconfinder.com/data/icons/digital-marketing-gradient-rave-and-glow/512/Privacy-128.png'style={{ height: '20px', width: '20px' }}/></span><span style={{marginLeft:'2%'}}>Privacy</span><span style={{float:'right'}}><img src='https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/170_arrow_next_right-256.png' style={{ height: '20px', width: '20px',cursor:'pointer'}} onClick={()=>handler(false,false,false,false,true,false)}/></span></ListGroup.Item>
                        <ListGroup.Item><span><img src='https://cdn0.iconfinder.com/data/icons/ikooni-outline-free-basic/128/free-27-128.png'style={{ height: '20px', width: '20px' }}/></span><span style={{marginLeft:'2%'}}>Delete Account</span><span style={{float:'right'}}><img src='https://cdn3.iconfinder.com/data/icons/basicolor-arrows-checks/24/170_arrow_next_right-256.png' style={{ height: '20px', width: '20px',cursor:'pointer'}} onClick={()=>handler(false,false,false,false,false,true)}/></span></ListGroup.Item>
                    </ListGroup>
                </Card>
            </div>
            <div className="col-sm-8">
                    {accountDtlsFlag && <AccountDetails/>}
                    {chngPassFlag && <ChangePassword/>}
                    {billingAddFlag && <BillingAddress/>}
                    {delAccFlag && <DeleteAccount/> }
                    {privacyFlag && <Privacy/>}
                    {shipAddFlag  && <ShippingAddress/>}
           </div>
        </div>
    )
}

export default Account;
