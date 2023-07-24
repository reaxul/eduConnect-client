import Banner from "../sections/Banner";
import CollegeCard from "../sections/CollegeCard";
import Gallery from "../sections/Gallery";
import ResearchPapers from "../sections/ResearchPapers";
import Reviews from "../sections/Reviews";
import SearchBox from "../sections/SearchBox";

const Home = () => {
    return (
        <>
            <SearchBox></SearchBox>
            <Banner></Banner>
            <CollegeCard></CollegeCard>
            <Gallery></Gallery>
            <ResearchPapers></ResearchPapers>
            <Reviews></Reviews>
        </>
    );
};

export default Home;