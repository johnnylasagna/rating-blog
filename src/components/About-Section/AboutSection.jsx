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
                <h1>Why did I make this?</h1>
                <div className='about-introduction-paragraphs'>
                    <p>
                        I've always wanted to impose my listening tastes on others.
                        Usually the medium was posting stories on instagram.
                        And that was fine for a while. 
                        But then I had an idea to make a website where I could store all my album ratings and reviews.
                        It would be easier for me to organise and it would be easier for other people to access it.
                    </p>
                    <p>
                        So I decided to learn web development for about a week so I could bring this project to fruition.
                        I'd tried learning react many times before this, but I'd always lose interest in the middle of it.
                        I had experience with html and css back in 2014 so web development wasn't entirely new to me.
                    </p>
                    <p>
                        So kind of similar to whenever i learn a new programming language I try to make games in it because it's something I'll have fun doing,
                        I tried making this in react to finally be able to have a complete run with the language.
                        I'd say I have a pretty good understanding of how stuff works in react now.
                    </p>
                    <p>
                        But I'm still no professional.
                        And i don't enjoy web development as much as i enjoy some other things like machine learning and low level programming.
                        Of course I'm not the best at any of those either but there's still a lot of time to learn.
                    </p>
                    <p>
                        The last 7 days have been very fun and I've completed most of the stuff I wanted to do with this project.
                        I'll add detailed reviews for the albums sometime in the future.
                        But I have a lot of other stuff I left behind for this project to complete first.
                    </p>
                    <p>
                        What started as an album rating app also now a home for my entire discography, songs that I'm very proud of.
                        I consider songwriting to be a bigger talent than anything I could learn in computer science.
                        I'm doing my part in trying to preserve good songwriting.
                    </p>
                    <p>
                        I had some other plans like adding a custom cursor, making the UI more mobile friendly and other more unimportant things.
                        I realised that this project slowly morphed into an inconspicuous clone of YouTube music and Genius and it was time to give it a break.
                    </p>
                    <p>
                        I had a very good friend helping out with some parts of the project guiding me and I'd like to thank them.
                    </p>
                </div>
            </div>
            <h2>Updates:</h2>
            <div className='about-cards'>
                {aboutCards}
            </div>
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