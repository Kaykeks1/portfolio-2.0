import "./About.css"

type Props = {
  id: string,
  onView: boolean
}

export default function About({ id, onView }: Props) {
  return (
    <section className='container' id={id}>
      <h1 className='title'>About</h1>
      <h3 className='subtitle'>Work experience</h3>
      <div className={`timeline ${onView && 'expanded'}`}>
        {
          [1,2,3].map((i, k) => (<div className={`timeframe ${(k % 2) === 0  ? 'left' : 'right'} ${onView && 'opaque'}`} key={k}>
            <p className="period">2017</p>
            <p className="summary">Lorem ipsum dolor sit amet, quo ei simul congue exerci, ad nec admodum perfecto mnesarchum, vim ea mazim fierent detracto.</p>
          </div>))
        }
      </div>
    </section>
  )
}
