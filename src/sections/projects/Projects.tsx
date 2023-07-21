import './Projects.css';
import libsys from '../../images/portfolio/libsys.png';
import arvo from '../../images/portfolio/arvo.png';
import summation from '../../images/portfolio/summation.png';
import svs from '../../images/portfolio/svs.png';
import todo from '../../images/portfolio/todo.png';
import url from '../../images/portfolio/url.png';
import vela from '../../images/portfolio/vela.png';

type Props = {
  id: string
}

export default function Projects({ id }: Props) {
  const projects = [
    { name: "LMS", description: "Helps librarians to manage day to day activities", url: libsys, stacks: ["React", "Sails JS", "Mongo DB"] },
    { name: "Landing page", description: "This is a simple landing page developed", url: arvo, stacks: ["React", "CSS"] },
    { name: "Dashboard", description: "An interactive dashboard with graphs and tables", url: vela, stacks: ["React", "CSS", "Chart JS"] },
    { name: "SVS", description: "A mobile app that helps verify a student's id using facial recognition", url: svs, stacks: ["React Native", "Web.py", "Open CV"] },
    { name: "Summation game", description: "A mobile game that lets you add numbers together to win", url: summation, stacks: ["React Native"] },
    { name: "Todo app", description: "A mobile app that helps keep track of your daily tasks", url: todo, stacks: ["React Native"] },
    { name: "URL Shortener", description: "A Web app that lets you input a valid website url and gives back a new url for the website", url: url, stacks: ["React", "GraphQL"] },
  ];
  return (
    <section className='container' id={id}>
      <h1 className='title'>Projects</h1>
      <h3 className='subtitle'>Things I've built so far</h3>
      <div className='project-list'>
        {
          projects.map((project, key) => <div className='project-item' style={{ backgroundImage: `url(${project.url})` }} key={key}>
            <div className='project-item-overlay'>
              <div>
                <h3 className='project-title'>{project.name}</h3>
                <p className='project-description'>{project.description}</p>
                <p className='project-stacks'>
                  {
                    project.stacks.map((i, k) => <span key={k}>{i}</span>)
                  }
                </p>
              </div>
            </div>
          </div>)
        }
      </div>
    </section>
  )
}
