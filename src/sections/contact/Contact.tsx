import "./Contact.css"

type Props = {
  id: string
}

export default function Contact({ id }: Props) {
  return (
    <section className='container' id={id}>
      <h1 className='title'>Contact</h1>
    </section>
  )
}
