import HomeSection from "../components/Home-Section/HomeSection"

function HomeView({data}) {
    const lastFiveEntries = data.sort((a, b) => a.id - b.id).slice(-5);
    return (
        <div>
            <HomeSection albums={lastFiveEntries} />
        </div>
    )
}

export default HomeView