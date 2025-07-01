function AboutCard({ block }) {
    return (
        <div className='about-card'>
            <h1>{block.title}</h1>
            <p>
                {block.description} <br />
                <ol>
                    {block.instructions.map((instruction, idx) => (
                        <li key={idx}>{instruction}</li>
                    ))}
                </ol>
            </p>
        </div>
    );
}

export default AboutCard;
