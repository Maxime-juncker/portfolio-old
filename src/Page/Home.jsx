import React, { Component } from 'react';
import PointLight from '../Components/PointLight';
import ProjectCard from '../Components/ProjectCard';
import SkillCard from '../Components/SkillCard';
import { ContactForm } from '../Components/ContactForm';

const violet = "#6C399F";
const blue = "#306AFF";
const red = "#FF3055";
const green = "#387256"; 

function Navbar()
{
  return (
    <div className='Navbar'>
      <a href="#Hero">HOME</a>
      <a href="#About">ABOUT</a>
      <a href="#Work">WORKS</a>
      <a href="#Contact">CONTACT</a>
    </div>
  )
}

class Home extends Component {
    render() {
      
        return (
            <body className="App">
              <Navbar/>
        
                <section className='Hero' id='Hero'>
                  <PointLight left={10} top={60} backgroundColor={violet}/>
                  <PointLight left={80} top={45} backgroundColor={violet}/>
                  <PointLight left={25} top={10} backgroundColor={violet}/>
        
                  <h1>JUNCKER <br /> MAXIME</h1>
                  <h3>SOFTWARE DEVELOPPER</h3>
                </section>
        
                <section className='About' id='About'>
                  <PointLight left={0} backgroundColor={blue}/>
                  <PointLight left={65} top={20} backgroundColor={blue}/>
                  <div className="Presentation">
                    <h1>ABOUT ME</h1>
                    <p>
                      I’m a frensh student who’s looking into software developpement, 
                      I also know web and game developpement. <br /><br />
                      I use object oriented language and mainly 
                      use c++ and c# language to create some small app 
                      for android or windows. <br /><br />
                      I’m also looking into creating 
                      simulation and machine learning stuff.
                    </p>
                  </div>
                  <div className="Skills">
                    <h1>SKILLS</h1>
                    <div className="Card-conterner">
                      <SkillCard content={"C#"} src={require("../Images/Cards/cs.svg").default}/>
                      <SkillCard content={"C++"} src={require("../Images/Cards/cpp.svg").default}/>
                      <SkillCard content={"CSS"} src={require("../Images/Cards/css.svg").default}/>
                      <SkillCard content={"PYTHON"} src={require("../Images/Cards/html.svg").default}/>
                      <SkillCard content={"UNITY"} src={require("../Images/Cards/unity.svg").default}/>
                      <SkillCard content={"UNREAL"} src={require("../Images/Cards/unreal.svg").default}/>
                      <SkillCard content={"BLENDER"} src={require("../Images/Cards/blender.svg").default}/>
                      <SkillCard content={"VS CODE"} src={require("../Images/Cards/visual-studio-code.svg").default}/>
                      <SkillCard content={"VISUAL STUDIO"} src={require("../Images/Cards/visual-studio.svg").default}/>
                      <SkillCard content={"RIDER"} src={require("../Images/Cards/jetbrains.svg").default}/>
                      <SkillCard content={"GITHUB"} src={require("../Images/Cards/github.svg").default}/>
                      <SkillCard content={"XAMARIN"} src={require("../Images/Cards/xamarin.svg").default}/>
                      <SkillCard content={"AVALONIA UI"} src={require("../Images/Cards/avalonia.svg").default}/>
                    </div>
                  </div>
                </section>
        
                <section className='Work' id='Work'>
                  <h1>WORK</h1>
                  <h2>MY LATEST PROJECT</h2>
        
                  <ProjectCard src={require("../Images/Projects/Maximatron/Maximatron-screen.png")}
                               title="The Maximatron" description="Desktop development"
                               logo={require("../Images/Projects/Maximatron/Maximatron-logo.png")}
                               nav={"/Maximatron"}/>
                  <ProjectCard src={require("../Images/Projects/HumanSI/HumanSI-screen.png")}
                               title="HumanSI" 
                               description="Human Simulation"
                               logo={require("../Images/Projects/HumanSI/HumanSI-logo.png")}
                               nav={"/HumanSI"}/>
                  <ProjectCard src={require("../Images/Projects/Pronout/Pronoute-screen.png")}
                               title="Pronout" 
                               description="Mobile App"
                               logo={require("../Images/Projects/Pronout/Pronoute_logo.png")}
                               nav={"/Pronout"}/>
                  <PointLight left={70} top={20} backgroundColor={red}/>
                  <PointLight left={10} top={5} backgroundColor={red}/>
                  <PointLight left={65} top={55} backgroundColor={red}/>
                  <PointLight left={0} top={70} backgroundColor={red}/>
                  <PointLight left={80} top={80} backgroundColor={red}/>
        
                </section>
        
                <section id='Contact' className='Contact'>
                  <h1>CONTACT</h1>
                  <section>
                    <article className='Contact-card'>
                      <ContactForm/>
                    </article>
                  </section>
                    <PointLight left={80} top={80} backgroundColor={green}/>
                    <PointLight left={0} top={0} backgroundColor={green}/>
                    <PointLight left={10} top={50} backgroundColor={green}/>               
                </section>
            </body>  
          );
    }
}

export default Home;
