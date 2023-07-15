import './GoToNext.css';
import { ReactComponent as Arrow } from '../../images/arrow_down.svg';

type Props = {
  goto: string
}

export default function GoToNext({ goto }: Props) {
  let text = ''
  if (goto === '#about') {
    text = 'About me';
  } else if (goto === '#stacks') {
    text = 'I know a few things';
  } else if (goto === '#projects') {
    text = 'Check out my work';
  } else if (goto === '#contact') {
    text = 'Reach me @';
  }
  return (
    <a className="goto-next" href={goto}>
      <span className='text'>{text}</span>
      <Arrow className='arrow' />
    </a>
  )
}
