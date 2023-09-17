import fs from 'fs'
import path from 'path'
import matter, { language } from 'gray-matter'
import Head from 'next/head'
import {marked} from 'marked'
import { transformAnchortoNextLink } from '../utils'
import ProgressBar  from '../components/ProgressBar'

export default function Home({
  frontmatter: { title, date, cover_image },
  slug,
  content,
}) {

  let skillsLevels = {
    'Python': 5,
    'JavaScript': 5,
    'C/C++': 4,
    'C#': 3,
    'Java': 4
  }
  let programmingLanguages = [];
  for (const [key, value] of Object.entries(skillsLevels)) {
    programmingLanguages.push({name: key, level: value});
  }

  skillsLevels = {
    'Django': 4,
    'Express': 3,
    'NodeJs': 4,
    'API´s': 4
  }
  let backendDev = [];
  for (const [key, value] of Object.entries(skillsLevels)) {
    backendDev.push({name: key, level: value});
  }

  skillsLevels = {
    'Css': 4,
    'HTML': 5,
    'ReactJs': 5,
    'NextJs': 4,
    'Bootstrap': 4,
    'Wordpress': 4
  }
  let frontendDev = [];
  for (const [key, value] of Object.entries(skillsLevels)) {
    frontendDev.push({name: key, level: value});
  }

  skillsLevels = {
    'SQL': 3,
    'Numpy': 5,
    'Pandas': 4,
    'Pytorch': 4,
    'Scipy': 4
  }
  let dataScience = [];
  for (const [key, value] of Object.entries(skillsLevels)) {
    dataScience.push({name: key, level: value});
  }

  skillsLevels = {
    'PyQt5': 4,
    'JavaSwing': 5,
    'Firebase': 4,
    'Stripe': 4,
    'Microcontrollers': 4
  }
  let otherSkills = [];
  for (const [key, value] of Object.entries(skillsLevels)) {
    otherSkills.push({name: key, level: value});
  }

  skillsLevels = {
    'English': 5,
    'Portuguese': 5,
    'Spanish': 3
  }
  let languages = [];
  for (const [key, value] of Object.entries(skillsLevels)) {
    languages.push({name: key, level: value});
  }

  function SkillSet({skillList, listName}) {
    return (
      <>
        <div class="column">
            <h3 style={{"text-align":"center"}}>{listName}</h3>
            <hr style={{"margin-bottom": "10px"}}/>
            <div class="skills-container">
              {skillList.map((skill, i) => (
                <div class="skill-row" key={i}>
                  <div class="skill-name" key={i}>{skill.name}</div>
                  <ProgressBar key={i} currentValue={skill.level} maxValue={5}/>
                </div>
              ))}
            </div>

        </div>
      </>
    )
  }



  return (
  <div class="container">
    <div class="card card-page">
        <div class="row">
            <img class="my-photo" src="/images/me.jpg" alt=""/>
            <h1 class="cv-title">About Me</h1>
        </div>
        <div class="cv-body">
            <div class="cv-section">
            <p>I&apos;m Carlos Franco, I love math and problem solving.</p>

            <p>My technological background starts with my graduation in Electrical Engineering, started in 2016 and finished in 2021, where I specialized in power converters and control systems. What I enjoyed the most was applying optimization algorithms, like a Genetic Algorithm, to design projects and to tune controllers. I also learned a lot about electronics, energy/signal transmission.</p>

            <p>In college I wa  s also enveloped very early in the world of microcontrollers, a subject in which I was the student monitor for a while and gave courses to high school and graduate students using Arduino.</p>

            <p>On my own interest I learned the ropes off Web Development, where I started with basic HTML and CSS, then Javascript, then ReactJs and finally NextJs. Now I have worked on a couple of solo projects, and recently  a collaboration with a colleague. I liked Web Development because it takes ideas and services to other people.</p>

            <p>While still in college I became interested in Game Engines and Physics Simulations, so I worked on a couple of projects, the main ones being my implementation of Nine Men Morris, and my implement of a water tank control simulation. Working on these kind of projects is where I learned the most about algorithms, time complexity, threading and all sorts of amazing concepts.</p>

            <p>I like to keep my mind open to learning new concepts and understanding why they could be useful in the future. Right now I&apos;m learning more about Backend Development using the Django Framework. After that I want to jump in to ASP.NET.</p>

                <div class="cv-row">
                    <SkillSet skillList={programmingLanguages} listName="General Programming"/>
                    <SkillSet skillList={dataScience} listName="Data Science"/>
                  </div>
                
                <div class="cv-row">
                    <SkillSet skillList={frontendDev} listName="Frontend Development"/>
                    <SkillSet skillList={backendDev} listName="Backend Development"/>
                </div>

                <div class="cv-row">
                    <SkillSet skillList={otherSkills} listName="Other Tech"/>
                    <div class="column">
                        <h3 style={{"text-align":"center"}}>Electrical Engineering</h3>
                        <hr/>
                        <ul>
                            <li>Power Electronics (Converter Design and Optimization)</li>
                            <li>Microcontrollers Programming</li>
                            <li>Control Systems (PID, MPC)</li>
                            <li>Electrical Circuits (Filters, Amplifiers)</li>
                            <li>Antennas and Wave Guides.</li>
                        </ul>
                    </div>
                </div>

                <div class="cv-row">
                  <SkillSet skillList={languages} listName="Languages"/>
                  <div class="column">
                      <h3 style={{"text-align":"center"}}>Next Skills</h3>
                      <hr/>
                      <ul>
                          <li>ASP.NET</li>
                          <li>Cybersecurity</li>
                          <li>Android Development</li>
                      </ul>
                  </div>
                </div>

                
            </div>
        </div>
    </div>
</div>

  );
}

export async function getStaticProps() {
  const renderer = {
    link(href, title, text) {
      let out = '<Link href="' + href + '"';
      if (title) {
        out += ' title="' + title + '"';
      }
      out += '>' + text + '</Link>';
      return out;
    },
  };
  
  marked.use({ renderer });
  const markdownWithMeta = fs.readFileSync(path.join('public/cv/cv.md'), 'utf-8')

  let { data: frontmatter, content } = matter(markdownWithMeta)
  content = marked(content)
  return {
    props: {
      frontmatter,
      content,
    },
  }
}