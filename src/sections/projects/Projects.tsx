import './Projects.css';
import backgroundImage from "../../images/me_1.jpeg";

type Props = {
  id: string
}

export default function Projects({ id }: Props) {
  return (
    <section className='container' id={id}>
      <h1 className='title'>Projects</h1>
      <h3 className='subtitle'>Things I've built so far</h3>
      <div className='project-list'>
        {
          [1,2,3,4,5,6,7].map((_, k) => <div className='project-item' style={{ backgroundImage: `url(${backgroundImage})` }} key={k}>
            <div className='project-item-overlay' key={k}>
              <div>
                <h3 className='project-title'>LMS</h3>
                <p className='project-description'>Helps librarians to manage day to day activities</p>
                <p className='project-stacks'>
                  {
                    [1,2,3].map(i => <span>React</span>)
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
