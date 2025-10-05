import "../styles/ProjectCard.css"

const ProjectCard = ( {project}) => {

console.log(project.img)

  return (
    <div className='card'>
        <div className='card_title'>
            #{project.id} {project.title}
        </div>

<img 
  src={project.img} 
  alt={project.title} 
  className="card__image" 
/>


        <div className='card_buttons'>
            <a href={project.demo} target="_blank" className="btn btn--demo">
          👁 demo
        </a>
        <a href={project.repo} target="_blank" className="btn btn--repo">
          💻 repo
        </a>
        <a href={project.note} target="_blank" className="btn btn--note">
          📝 note
        </a>
        </div>
    </div>
  )
}

export default ProjectCard