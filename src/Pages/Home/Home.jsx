// Example usage in Home.jsx

import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Slider from "../../Components/slider/Slider";
import Categories from "../../Components/Categories/Categories";
import Contact from "../../Components/Contact/Contact";


const Home = () => {
  return (
   <div className="home">
    <Slider/>
    <FeaturedProducts type="featured" />
    <Categories />
    <FeaturedProducts type="trending" />
    <Contact />
   </div>
  );
};

export default Home;
