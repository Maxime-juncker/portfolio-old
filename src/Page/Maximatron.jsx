import React, { Component } from 'react';
import PointLight from '../Components/PointLight';

class Maximatron extends Component {
    render() {
        return (
            <body>
                
            <header className='Project-about'>
                <img src={require("../Images/Projects/Maximatron/Maximatron-logo.png")} alt="Maximatron logo" />
                <h1>THE MAXIMATRON</h1>
                <h1 style={{position: 'absolute', bottom: "3vh", fontSize: "24px"}}>SROLL</h1>
                <PointLight left={70} top={20} backgroundColor={"var(--red)"}/>
              
            
            </header>
            <section className='Content'>
                <div className="Summary">
                    <article>
                        <div>
                            <h2>PROJECT IDEA</h2>
                            <p>The Maximatron is a productivity app 
                                where the user can add 
                                multiple type of blocks to do a variety of things like,
                                which include basic text field, 
                                check box, lists and more are planned to come.</p>
                        </div>
                    </article>
                    <article className='screenshot-contener' style={{backgroundColor: "var(--redLow)"}}> 
                        <img src={require("../Images/Projects/Maximatron/Maximatron-app-screen01.png")} alt="" />
                    </article>
                </div>
            </section>
            </body>
        );
    }
}

export default Maximatron;
