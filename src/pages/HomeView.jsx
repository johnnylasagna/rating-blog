import HomeSection from "../components/Home-Section/HomeSection"

function HomeView({data}) {
    const lastFiveEntries = data.sort((a, b) => a.id - b.id).slice(-5);
    return (
        <HomeSection albums={lastFiveEntries} />
    )
}

export default HomeView