import './AboutSection.css'

function AboutSection({ data }) {
    const aboutCards = data.map(block => <div className='about-card'>
        <h1>{block.title}</h1>
        <p>
            {block.description} <br />
            <ol>
                {block.instructions.map(instruction => (<li>{instruction}</li>))}
            </ol>
        </p>
    </div>)

    return (
        <div className="about-section">
            <div className='about-introduction'>
                <h1>Hello fellow music enthusiast</h1>
                <p>
                    This is a small website I made using the power of the internet to show off all the different albums I've heard. <br />
                    I'm big on listening to music and i thought it would be a good idea to collect all the elite knowledge I've gathered about
                    what sounds good and what doesn't in an easily accessible place <br />
                    <br />
                    I've tried to use tutorials and references where I could, and avoided using AI tools as much as possible except for some manual chores
                    like filling out jsons with album details. I'm not that into web development anymore but I'm doing it for the fun of making something
                    people can see to know more about me.
                    <br />
                    <br />
                    Here, you can:
                    <ol>
                        <li>Browse albums grouped by band</li>
                        <li>See a complete list of all albums I've rated</li>
                        <li>Check out some of my own music creations</li>
                        <li>Find my current music recommendations</li>
                    </ol>
                    Use the navigation bar at the top to explore these sections and discover more!
                </p>
            </div>
            <h2>Updates:</h2>
            {aboutCards}
        </div>
    )
}

export default AboutSection

// This is a small website I made using the power of the internet to show off all the different albums I've heard. <br />
// You have four choices to choose from: <br />
// <ol>
//     <li>View albums grouped by band</li>
//     <li>View all the albums</li>
//     <li>Have a glance at the music I've made</li>
//     <li>Look at my current recommendations</li>
// </ol>