import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

import './SocialLinks.css'

function SocialLinks() {
    return (
        <div className='social-links'>
            <a href="https://github.com/johnnylasagna" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGithub} /> Github
            </a>
            <a href="https://instagram.com/johnnylasagna2212" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} /> Instagram
            </a>
            <a href="https://www.linkedin.com/in/nishchay-singh-2965ab328/" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faLinkedin} /> LinkedIn
            </a>
            <a href="https://x.com/Nishchay22pro" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} /> Twitter
            </a>
        </div>
    )
}

export default SocialLinks