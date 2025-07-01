
import './AboutSection.css';
import AboutIntroduction from './About-Introduction/AboutIntroduction.jsx';
import AboutCards from './About-Cards/AboutCards.jsx';

function AboutSection({ data }) {
    return (
        <div className="about-section">
            <AboutIntroduction />
            <h2>Updates:</h2>
            <AboutCards data={data} />
        </div>
    );
}

export default AboutSection;

// This is a small website I made using the power of the internet to show off all the different albums I've heard. <br />
// You have four choices to choose from: <br />
// <ol>
//     <li>View albums grouped by band</li>
//     <li>View all the albums</li>
//     <li>Have a glance at the music I've made</li>
//     <li>Look at my current recommendations</li>
// </ol>