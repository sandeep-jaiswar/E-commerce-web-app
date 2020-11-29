// import { event } from 'jquery';
import { useState } from 'react';
// import { Grid, Menu, Segment } from 'semantic-ui-react';

function Dashboard(){
    const [activeItem,setActiveItem]=useState('bio');
    function handleItemClick(e,name){
        setActiveItem(name);
    }
    
    return (
        <div className="row">
            <div className="col-sm-1">
                <div className="d-flex flex-column" style={{height: "100vh"}}>
                    <div className="p-2 left0"> 
                        <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="home.png"/>
                    </div>
                    <div className="p-2 left0" style={{ marginTop: "15%"}}>
                        <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="order.png"/>
                    </div>
                    <div className="p-2 left0" style={{ marginTop: "15%"}}>
                        <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="bag.png"/>
                    </div>
                    <div className="p-2 left0" style={{ marginTop: "15%"}}>
                        <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="payment.png"/>
                    </div>
                    <div className="p-2 bottom0 left0">
                        <img sizes="16x16" style={{ height: "50px",cursor : "pointer"}} src="account.png"/>
                    </div>
                </div>
            </div>
            <div className="col-sm-11">
                <div>

                </div>
            </div>
        </div>
    );

}
export default Dashboard;