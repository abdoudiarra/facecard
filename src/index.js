import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css"

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA"
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D"
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF"
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33"
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB"
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00"
  }
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(){
  return(
    <div>
      <img className="avatar" src="naruto.jpg"></img>
    </div>
  )
}

function Intro(){
  return (
    <div>
      <h1>Jonas Schmedtmann</h1>
      <p>Full-dtack web developer and teacher at Udemy.
        When not coding or preparing a course, I like to play board games, to cool (and eat)
        ,or just to enjoy the portuguese sun at the beach.
      </p>
    </div>
  )
}

function SkillList(){
  return(
    <div className="skill-list">
      {skills.map(s => <Skill skill = {s.skill} level = {s.level} bgColor = {s.color}></Skill>)}
      {/* <Skill skill="HTML+CSS" bgColor='blue'></Skill>
      <Skill skill="Javascript" bgColor='yellow'></Skill>
      <Skill skill="Web Design" bgColor='green'></Skill>
      <Skill skill="React" bgColor='red'></Skill>
      <Skill skill="Git and Github" bgColor='blue'></Skill>
      <Skill skill="Svelte" bgColor='red'></Skill> */}
      
    </div>
  )
}

function Skill({skill ,level, bgColor}){
  return(
    <div className="skill" style={{backgroundColor: bgColor}}>
      <p>{skill}</p>
      <span>{level == "advanced" && "🥇"}</span>
      <span>{level == "beginner" && "🥉"}</span>
      <span>{level == "intermediate" && "🥈"}</span>
    </div>
  )
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
