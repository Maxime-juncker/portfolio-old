import './App.css';
import HeroImg from './Images/header-img.png'

const violet = "#6C399F";
const blue = "#306AFF";
const red = "#FF3055";

function Navbar()
{
  return (
    <div className='Navbar'>
      <a href="#TOP">ABOUT</a>
      <a href="#TOP">WORKS</a>
      <a href="#TOP">CONTACT</a>
    </div>
  )
}

function SkillCard({src, content})
{
  return(
    <>
      <div className='Skill-card'>
        <img src={src} alt='tkt'/>
        <h3>{content}</h3>
      </div>
    </>
  )
}

function ProjectCard({src, title, description})
{
    return(
    <>
      <div className='Project-card'>
        <section>
          <h1>{title}</h1>
          <p>{description}</p>
          <article>
            <img src={require("./Images/Cards/github.svg").default} alt="The github logo" />
            <h3>get it on github</h3>
          </article>
        </section>
          <img src={src} alt="The project img" />
      </div>
    </>
  )
}
function PointLight({left, top, backgroundColor})
{
  left+="%"
  top+="%"

  return (
    <div className="Point-light" style={{left,top,backgroundColor}}></div>
  );
}

function App() {
  return (
    <div className="App">
      <header>
        <Navbar/>
      </header>

      <body>
        <section className='Hero'>
          <img src={HeroImg} className='Header-img' alt='multiple devices'/>
          <PointLight left={10} top={60} backgroundColor={violet}/>
          <PointLight left={80} top={45} backgroundColor={violet}/>
          <PointLight left={25} top={10} backgroundColor={violet}/>

          <h1>JUNCKER <br /> MAXIME</h1>
          <h3>SOFTWARE DEVELOPPER</h3>
        </section>

        <section className='About'>
          <PointLight left={0} backgroundColor={blue}/>
          <PointLight left={30} top={45} backgroundColor={blue}/>
          <PointLight left={70} top={20} backgroundColor={blue}/>
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
              <SkillCard content={"C#"} src={require("./Images/Cards/cs.svg").default}/>
              <SkillCard content={"C++"} src={require("./Images/Cards/cpp.svg").default}/>
              <SkillCard content={"CSS"} src={require("./Images/Cards/css.svg").default}/>
              <SkillCard content={"PYTHON"} src={require("./Images/Cards/html.svg").default}/>
              <SkillCard content={"UNITY"} src={require("./Images/Cards/unity.svg").default}/>
              <SkillCard content={"UNREAL"} src={require("./Images/Cards/unreal.svg").default}/>
              <SkillCard content={"BLENDER"} src={require("./Images/Cards/blender.svg").default}/>
              <SkillCard content={"VS CODE"} src={require("./Images/Cards/visual-studio-code.svg").default}/>
              <SkillCard content={"VISUAL STUDIO"} src={require("./Images/Cards/visual-studio.svg").default}/>
              <SkillCard content={"RIDER"} src={require("./Images/Cards/jetbrains.svg").default}/>
              <SkillCard content={"GITHUB"} src={require("./Images/Cards/github.svg").default}/>
            </div>
          </div>
        </section>

        <section className='Work'>
          <h1>WORK</h1>
          <h2>MY LATEST PROJECT</h2>

          <ProjectCard src={require("./Images/Projects/Maximatron-screen.png")}
                       title="MAXIMATRON" description="A small todo list project with block based notes "/>
          <ProjectCard src={require("./Images/Projects/HumanSI-logo.png")}
                       title="HUMANSI" 
                       description="A small civilisation simulation project
                       done for a competition.
                       (very computer intensive)                       
                       PS : project made with 4 friends "/>
          <ProjectCard src={require("./Images/Projects/Pronout-screen.png")}
                       title="MAXIMATRON" 
                       description="A clone from the pronote app, but you can make a custom schedual to make seems like you have to eat early and so go before everyone else "/>
          <PointLight left={70} top={20} backgroundColor={red}/>
          <PointLight left={10} top={30} backgroundColor={red}/>

         
        </section>
      </body>
    </div>  
  );
}

export default App;
