import SocialFollow from './SocialFollow'


export default function Footer({}) {
  return (
    <footer>
      <div className='footer-container'>
          <SocialFollow social_media='github' link='https://www.github.com/Cbonief/'/>
          <SocialFollow social_media='linkedin' link='https://www.linkedin.com/in/cbonief/'/>
          <SocialFollow social_media='twitter' link='https://twitter.com/cbonief_me'/>
      </div>
    </footer>
  )
}
