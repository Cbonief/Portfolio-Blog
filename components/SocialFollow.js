import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faYoutube,
    faFacebook,
    faTwitter,
    faInstagram,
    faGithub,
    faLinkedin
  } from "@fortawesome/free-brands-svg-icons";

const icon_map = {
    youtube: faYoutube,
    facebook: faFacebook,
    github: faGithub,
    twitter: faTwitter,
    linkedin: faLinkedin
}
  

export default function SocialFollow({social_media, link}) {
    return (
        <a href={link} className={social_media+" social"} target="_blank" rel="noreferrer">
        <FontAwesomeIcon key={social_media} icon={icon_map[social_media]} size="2x" />
        </a>  
    )
  }