import "./About.css"

type Props = {
  id: string
}

export default function About({ id }: Props) {
  return (
    <section className='container' id={id}>
      <h1 className='title'>About</h1>
    </section>
  )
}
