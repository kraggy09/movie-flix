import HeroComponent from "../components/HeroComponent";
import Popular from "../components/Popular";
import TopRated from "../components/TopRated";
import Trending from "../components/Trending";

const Home = () => {
  return (
    <>
      <HeroComponent />
      <article className="md:mx-16 mx-6">
        <Trending />
        <Popular />
        <TopRated />
      </article>
    </>
  );
};

export default Home;
