import React, { Component } from 'react';
import PointLight from '../Components/PointLight';
import { Link } from 'react-router-dom';
const violet = "#6C399F";


class NotFound extends Component {
    render() {
        return (
            <div className='Not-found'>
                <Link className='link' style={{zIndex: 1,
                    textDecoration: "underline" ,position: 'absolute', top:"5%", left: "5%", fontSize: "24px"}}
                     to="/home">← Go Back</Link>
                <h1 style={{zIndex: 10}}>404 <br /> Not Found</h1>
                <h1 style={{zIndex: 10, rotate: "25deg", position: 'absolute', top: "0", left: "30%"}} >:’(</h1>
                <PointLight left={0} top={0} backgroundColor={violet}/>
                <PointLight left={0} top={0} backgroundColor={violet}/>
                <PointLight left={80} top={50} backgroundColor={violet}/>
                <PointLight left={80} top={50} backgroundColor={violet}/>

            </div>
        );
    }
}

export default NotFound;
