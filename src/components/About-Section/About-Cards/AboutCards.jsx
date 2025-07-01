import './AboutCards.css';
import AboutCard from './About-Card/AboutCard.jsx';

function AboutCards({ data }) {
    return (
        <div className='about-cards'>
            {data.map((block, idx) => (
                <AboutCard key={idx} block={block} />
            ))}
        </div>
    );
}

export default AboutCards;
