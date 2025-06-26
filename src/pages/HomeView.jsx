import HomeSection from "../components/Home-Section/HomeSection"

function HomeView({data}) {
    const lastFiveEntries = data.slice(-5);
    return (
        <HomeSection albums={lastFiveEntries} />
    )
}

export default HomeView