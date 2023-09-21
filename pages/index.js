import fs from 'fs'
import path from 'path'
import matter, { language } from 'gray-matter'
import Head from 'next/head'
import {marked} from 'marked'
import { transformAnchortoNextLink } from '../utils'
import ProgressBar  from '../components/ProgressBar'
import { useEffect, useRef } from 'react'
import { useRouter } from 'next/router'

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
        <div className="column">
            <h3 style={{"textAlign":"center"}}>{listName}</h3>
            <hr style={{"marginBottom": "10px"}}/>
            <div className="skills-container">
              {skillList.map((skill, i) => (
                <div className="skill-row" key={i}>
                  <div className="skill-name" key={i}>{skill.name}</div>
                  <ProgressBar key={i+listName} currentValue={skill.level} maxValue={5}/>
                </div>
              ))}
            </div>

        </div>
      </>
    )
  }

  const myHistoryRef = useRef(null);
  const jobHistoryRef = useRef(null);
  const router = useRouter();
  const hash = router.query;
  console.log(hash)

  const toggleAccordionsBasedOnHash = () => {
    const hash = window.location.hash;
    if (hash === '#my-history' && myHistoryRef.current) {
      toggleAccordion(myHistoryRef.current);
      if (jobHistoryRef.current && jobHistoryRef.current.classList.contains('active')) {
        toggleAccordion(jobHistoryRef.current);
      }
    } else if (hash === '#job-history' && jobHistoryRef.current) {
      toggleAccordion(jobHistoryRef.current);
      if (myHistoryRef.current && myHistoryRef.current.classList.contains('active')) {
        toggleAccordion(myHistoryRef.current);
      }
    }
  };

  

  useEffect(() => {
    console.log("Loaded page")
    const hash = window.location.hash;
    switch (hash) {
      case '#job-history':
        if (jobHistoryRef.current) {
          toggleAccordion(jobHistoryRef.current);
        }
        break;
      default:
        if (myHistoryRef.current) {
          toggleAccordion(myHistoryRef.current);
        }
        break;
    }

    // Listen for route changes in Next.js
    const handleRouteChange = (url) => {
      console.log("Changed")
      if (url.includes('#')) {
        toggleAccordionsBasedOnHash();
      }
    };

    // Handle hash change
    const handleHashChange = () => {
      console.log("Changed")
      toggleAccordionsBasedOnHash();
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    window.addEventListener('hashchange', handleHashChange);

    // Cleanup
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
      window.removeEventListener('hashchange', handleHashChange);
    };
  }, []);
  

  
  function toggleAccordion(accordion){
    var panel = accordion.nextElementSibling;
    accordion.classList.toggle("active");
    if (panel.style.maxHeight) {
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  };




  return (
  <div className="container">
    <Head>
        <title>Carlos Franco</title>
    </Head>
    <div className="card card-page">
        <div className="row">
            <img className="my-photo" src="/images/me.jpg" alt=""/>
            <h1 className="cv-title">About Me</h1>
        </div>
        <div className="cv-body">
            <div className="cv-section">
              <button ref={myHistoryRef} className="accordion" id="my-history" onClick={(e)=>toggleAccordion(e.target)}>My Journey</button>
              <div style={{"marginBottom": "10px"}} className="panel">
                <p>I&apos;m Carlos Franco, I love math and problem solving.</p>
                <p>My technological background starts with my graduation in Electrical Engineering, started in 2016 and finished in 2021, where I specialized in power converters and control systems. What I enjoyed the most was applying optimization algorithms, like a Genetic Algorithm, to design projects and to tune controllers. I also learned a lot about electronics, energy/signal transmission.</p>

                <p>In college I was also enveloped very early in the world of microcontrollers, a subject in which I was the student monitor for a while and gave courses to high school and graduate students using Arduino.</p>

                <p>On my own interest I learned the ropes off Web Development, where I started with basic HTML and CSS, then Javascript, then ReactJs and finally NextJs. Now I have worked on a couple of solo projects, and recently  a collaboration with a colleague. I liked Web Development because it takes ideas and services to other people.</p>

                <p>While still in college I became interested in Game Engines and Physics Simulations, so I worked on a couple of projects, the main ones being my implementation of Nine Men Morris, and my implement of a water tank control simulation. Working on these kind of projects is where I learned the most about algorithms, time complexity, threading and all sorts of amazing concepts.</p>

                <p>I like to keep my mind open to learning new concepts and understanding why they could be useful in the future. Right now I&apos;m learning more about Backend Development using the Django Framework. After that I want to jump in to ASP.NET.</p>
              </div>

              <button ref={jobHistoryRef} id="job-history" onClick={(e)=>toggleAccordion(e.target)} className="accordion">Employment History</button>
              <div className="panel">
                <h4 style={{"marginTop": "10px"}} className='cv-job-name'>House of Bread Bakery</h4>
                <h5 style={{"margin": "0px"}}><i>Mar 2021 - Nov 2021</i></h5>
                <p style={{"margin": "0px"}}><b>Front Desk</b>: Served and gave suggestions to customer in store and over the phone. Organized products and received new inventory.</p>
                <hr></hr>
                <h4 style={{"marginTop": "10px"}} className='cv-job-name'>Starbucks</h4>
                <h5 style={{"margin": "0px"}}><i>Dec 2021 - Feb 2023</i></h5>
                <p style={{"margin": "0px"}}><b>Barista -&gt; Shift Supervisor</b>: As a Barista I had to micromanage my tasks to achieve a steady work flow while maintaning a high product quality and customer connection. I later became a Shift Supervisor, and in that position I had to organize the shift, making sure that my colleagues had the tools to succeed, while still giving them agency. This included organizing stocks, positioning baristas and looking out for the general state of the store.</p>
                <hr></hr>
                <h4 style={{"marginTop": "10px"}} className='cv-job-name'>Adam & Joe's Knows Lunch</h4>
                <h5 style={{"margin": "0px"}}><i>Feb 2023 - Sep 2023</i></h5>
                <p style={{"margin": "0px"}}><b>Front Desk</b>: Made sure the restaurant was ready for customer. Took order over the phone and in person. Always kept a high standard of service.</p>
              </div>
            
                <div className="cv-row">
                    <SkillSet key={1} skillList={programmingLanguages} listName="General Programming"/>
                    <SkillSet key={2} skillList={dataScience} listName="Data Science"/>
                  </div>
                
                <div className="cv-row">
                    <SkillSet key={3} skillList={frontendDev} listName="Frontend Development"/>
                    <SkillSet key={4} skillList={backendDev} listName="Backend Development"/>
                </div>

                <div className="cv-row">
                    <SkillSet key={5} skillList={otherSkills} listName="Other Tech"/>
                    <div className="column">
                        <h3 style={{"textAlign":"center"}}>Electrical Engineering</h3>
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

                <div className="cv-row">
                  <SkillSet key={6} skillList={languages} listName="Languages"/>
                  <div className="column">
                      <h3 style={{"textAlign":"center"}}>Next Skills</h3>
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