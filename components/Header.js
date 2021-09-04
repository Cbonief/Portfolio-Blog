import Link from 'next/link'
import SocialFollow from './SocialFollow'

const social_medias = [
  {name:'github', link:'https://www.github.com/Cbonief/'},
  {name:'linkedin', link:'https://www.linkedin.com/in/cbonief/'},
  {name:'twitter', link:'https://twitter.com/cbonief_me'}
]

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <Link key={0} href='/' passHref>
          <h2 className='header-title'>Carlos Franco</h2>
        </Link>
        <Link key={1} href='/projects' passHref>
          <h2 className='header-page'>My Projects</h2>
        </Link>
        <Link key={2} href='/pushlowski_calculator' passHref>
          <h2 className='header-page'>Pushlowski</h2>
        </Link>
      </div>
      <div className='social-media-container'>
          {social_medias.map((media) => (
            <SocialFollow key={media.name} social_media={media.name} link={media.link} passHref/>
          ))}
      </div>
    </header>
  )
}
