import { ReactComponent as OfficeIcon } from '../../images/svgs/office.svg';
import "./About.css"

type Props = {
  id: string,
  onView: boolean
}

export default function About({ id, onView }: Props) {
  const experiences = [
    {
      period: 'Jul 2018 - Jul 2019',
      position: 'Frontend developer Intern',
      company: 'Fieldinsight',
      summary: 'Gained knowledge about modern web development tools to create websites compatible with multiple browsers',
    },
    {
      period: 'Feb 2020 - Dec 2021',
      position: 'Fullstack Developer',
      company: 'Chronos NG',
      summary: 'Reverse engineered software for mobile operating systems with better user experience for a client in 3 months.',
    },
    {
      period: 'Jan 2022 - Present',
      position: 'Software Developer',
      company: 'B54',
      summary: 'Collaborated with project managers to select ambitious, but realistic coding milestones on pre-release software project development.',
    },
  ];
  return (
    <section className='container' id={id}>
      <h1 className='title'>About</h1>
      <p className='subtext'>
        I am a self-driven software developer seeking to work in a motivating environment to utilize my skills and to successfully develop applications with the aim of achieving corporate goals and organization objectives.
      </p>
      <h3 className='subtitle'>Work experience</h3>
      <div className={`timeline ${onView && 'expanded'}`}>
        {
          experiences.map((item, k) => (
            <div className={`timeframe ${(k % 2) === 0  ? 'left' : 'right'} ${onView && 'opaque'}`} key={k}>
              <p className="period">{item.period}</p>
              <p className="position">{item.position}</p>
              <p className="company">{item.company} <OfficeIcon className='office-icon'/></p>
              <p className="summary">{item.summary}</p>
            </div>
          ))
        }
      </div>
    </section>
  )
}
