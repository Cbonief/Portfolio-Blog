import Link from 'next/link'
import SocialFollow from './SocialFollow'

export default function Header() {
  return (
    <header>
      <div className='header-container'>
        <Link href='/' passHref>
          <h2 className='header-title'>Carlos Franco</h2>
        </Link>
        <Link href='/projects'>
          <h2 className='header-page'>My Projects</h2>
        </Link>
      </div>
      <div className='social-media-container'>
          <SocialFollow social_media='github' link='https://www.github.com/Cbonief/'/>
          <SocialFollow social_media='linkedin' link='https://www.linkedin.com/in/cbonief/'/>
          <SocialFollow social_media='twitter' link='https://twitter.com/cbonief_me'/>
      </div>
    </header>
  )
}
