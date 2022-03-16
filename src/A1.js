import React from "react";
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import { Icon, Map } from "leaflet";
// import * as parkData from "./data/skateboard-parks.json";



const moment=require('moment');



function A12(props){
    let x=props['results']['0'];
    let imagesource=x['picture']['large'];
    let name1=x['name']['title']+" "+x['name']['first']+" "+x['name']['last'];
    let DOB = moment(x['dob']['date']);
    let DOB1=DOB.format("DD MMM YYYY");
    let addresss=x['location']['street']['number']+" "+x['location']['street']['name']+" "+x['location']['city']+" "+x['location']['state']+" "+x['location']['country']+" "+x['location']['postcode'];
    return (
        <div id="APS1">
        {/* <div id="map1">{MAP1()}</div> */}
        <div><span><img src={imagesource} alt='photo'></img></span>&nbsp;&nbsp;
        <span id="namem">{name1}</span></div>
        <div class="Abhay1">
            <div>Username</div>
            <div>{x['login']['username']}</div>
            <div><button type="button" onClick={function(){}}>Edit</button></div>
        </div>
        <div class="Abhay1">
            <div>Date of Birth</div>
            <div>{DOB1}</div>
            <div><button type="button" onClick={function(){}}>Edit</button></div>

        </div>
        <div class="Abhay1">
            <div>Phone Number</div>
            <div>{x['phone']}</div>
            <div><button type="button" onClick={function(){}}>Edit</button></div>

        </div>
        <div class="Abhay1">
            <div>Address</div>
            <div>{addresss}</div>
            <div><button type="button" onClick={function(){}}>Edit</button></div>

        </div>
        <div class="Abhay1">
            <div>Job title</div>
            <div>Product Designer</div>
            <div><button type="button" onClick={function(){}}>Edit</button></div>

        </div>
        <div class="Abhay1">
            <div>Alternate contact email<br/>Enter an alternate email if you/d like to be</div>
            <div>{x['email']}</div>
            <div><button type="button" onClick={function(){}}>Edit</button></div>

        </div>


        </div>
    )
}

export default function A1(){
    const [a, setA]=React.useState([]);
    async function AA(){
        let A11 = await fetch('https://randomuser.me/api/');
        let A11_1 = await A11.json();
        return A11_1;
    }
    React.useEffect(
        async function(){
        let A22=await AA();
        setA(A22);
    },[])
    if(a.length===0){
        return (
            <div>HELLO ABHAYA</div>
        )
    }
    else{
    return(
        <div>{A12(a)}</div>
    )
    }
}