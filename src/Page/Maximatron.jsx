import React, { Component } from 'react';
import PointLight from '../Components/PointLight';
import SkillCard from '../Components/SkillCard';


class Maximatron extends Component {
    render() {
        return (
            <body>                
            <header className='Project-about'>
                <img src={require("../Images/Projects/Maximatron/Maximatron-logo.png")} alt="Maximatron logo" />
                <h1>THE MAXIMATRON</h1>
                <h1 style={{position: 'absolute', bottom: "3vh", fontSize: "24px"}}>SROLL</h1>
                <PointLight left={70} top={80} backgroundColor={"var(--red)"}/>
                <PointLight left={30} top={60} backgroundColor={"var(--red)"}/>
                <PointLight left={-20} top={90} backgroundColor={"var(--red)"}/>
                <PointLight left={50} top={120} backgroundColor={"var(--red)"}/>
                <PointLight left={30} top={150} backgroundColor={"var(--red)"}/>

            </header>

            <section className='Content'>
                <div className="Summary">
                    <article>
                        <div>
                            <h2>Project Idea</h2>
                            <p>The Maximatron is a productivity app 
                                where the user can add 
                                multiple type of blocks to do a variety of things like,
                                which include basic text field, 
                                check box, lists and more are planned to come.</p>
                        </div>
                        <div>
                            <h2>Tools Used</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"C#"} src={require("../Images/Cards/cs.svg").default}/>
                                <SkillCard content={"RIDER"} src={require("../Images/Cards/jetbrains.svg").default}/>
                                <SkillCard content={"GITHUB"} src={require("../Images/Cards/github.svg").default}/>
                                <SkillCard content={"AVALONIA UI"} src={require("../Images/Cards/avalonia.svg").default}/>
                            </div>
                        </div>
                        <div>
                            <h2>Platform supported</h2>
                            <div className="Card-conterner">
                                <SkillCard content={"WINDOWS"} src={require("../Images/Cards/windows.svg").default}/>
                            </div>

                        </div>
                    </article>
                    <article className='screenshot-contener' style={{backgroundColor: "var(--redLow)"}}> 
                        <img src={require("../Images/Projects/Maximatron/Maximatron-app-screen01.png")} alt="" />
                        <img src={require("../Images/Projects/Maximatron/Maximatron-app-screen02.png")} alt="" />
                    </article>
                </div>
                <div className='Features'>
                <PointLight left={0} top={0} backgroundColor={"var(--red)"}/>
                <PointLight left={-40} top={170} backgroundColor={"var(--red)"}/>

                    <h2>Features</h2>
                    <li>Files hierachy</li>
                    <li>Opening folder / file</li>
                    <li>Saving / Quick saving file</li>
                    <li>All action contain shortcut</li>
                    <li>Custom saving using .maximatron format</li>
                    <li>App theme match windows accent colors</li>
                    <li>Lists / note / checkbox blocks</li>
                </div>
            </section>
            </body>
        );
    }
}

export default Maximatron;
