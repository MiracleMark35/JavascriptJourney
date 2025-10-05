import React from 'react'
import ProjectCard from "../components/ProjectCard"
import {projects} from "../data/projects"
import "../styles/home.css"


const home = () => {
  return (
    <div className='home'>
        <section className='intro'>
            <div className='intro-text'>
              <p>
            Here is a list of my versions of <strong>JavaScript30</strong> practice projects.<br />
            It’s a free course created by <a href="https://wesbos.com" target="_blank">Wes Bos</a> where you can practice
            vanilla JS by doing small and fun projects.
          </p>  
            </div>
            <div className='intro_links'>
            <a href="https://javascript30.com" target="_blank" className="link link--view">→ view course</a>
            <a href="https://github.com/wesbos/JavaScript30" target="_blank" className="link link--repo">💻 github repo</a>
            </div>
        </section>

        <section className='projects'>
            <h2 className='project_title'>My Projects</h2>
            <div className='project_grid'>
                {projects.map ( (project) => {
                    return <ProjectCard key={project.id} project={project}/>
                })}
            </div>
        </section>
    </div>
  )
}

export default home