import './Stacks.css';
import { ReactComponent as CSSLogo } from '../../images/svgs/css.svg';
import { ReactComponent as GitLogo } from '../../images/svgs/git.svg';
import { ReactComponent as GithubLogo } from '../../images/svgs/github.svg';
import { ReactComponent as ReactLogo } from '../../images/svgs/react.svg';
import { ReactComponent as HTMLLogo } from '../../images/svgs/html.svg';
import { ReactComponent as JSLogo } from '../../images/svgs/js.svg';
import { ReactComponent as SASSLogo } from '../../images/svgs/sass.svg';
import { ReactComponent as TailwindLogo } from '../../images/svgs/tailwind.svg';
import { ReactComponent as VSCodeLogo } from '../../images/svgs/vscode.svg';
import { ReactComponent as VueLogo } from '../../images/svgs/vue.svg';
import { ReactComponent as NestJSLogo } from '../../images/svgs/nest.svg';
import { ReactComponent as PythonLogo } from '../../images/svgs/python.svg';

type Props = {
  id: string
}

export default function Stacks({ id }: Props) {
  const stacks = [HTMLLogo, CSSLogo, JSLogo, ReactLogo, TailwindLogo, SASSLogo, GitLogo, VSCodeLogo, GithubLogo, VueLogo, NestJSLogo, PythonLogo]
  return (
    <section id={id} className='container'>
      <h1 className='title'>My Tech Stack</h1>
      <h3 className='subtitle'>Technologies I’ve been working with recently</h3>
      <div className='stacks'>
        {
          stacks.map((item, key) => {
            const Stack = item
            return <div className='stack-item' key={key}><Stack /></div>
          })
        }
      </div>
    </section>
  )
}
