import SocialFollow from './SocialFollow'

const social_medias = [
  {name:'github', link:'https://www.github.com/Cbonief/'},
  {name:'linkedin', link:'https://www.linkedin.com/in/cbonief/'},
  {name:'twitter', link:'https://twitter.com/cbonief_me'}
]

export default function Footer({}) {
  return (
    <footer>
      <div className='footer-container'>
          {social_medias.map((media) => (
            <SocialFollow key={media.name} link={media.link} />
          ))}
      </div>
    </footer>
  )
}
