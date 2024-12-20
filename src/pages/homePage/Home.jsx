import Title from "../../Shared/Title";
import Banner from "./Banner";
import FoodCategory from '../../pages/homePage/FoodCategory';
import Sub_banner from "./Sub_banner";
import Review from "./Review";

const Home = () => {
    return (
        <div>
            <Banner />
            <Title title="Popular Now" />
            <FoodCategory category="popular"/>
            <Title title="Pizza" />
            <FoodCategory category="pizza"/>
            <Title title="Dessert" />
            <FoodCategory category="desert"/>
            <Title title="Salad" />
            <FoodCategory category="salad"/>
            <Sub_banner/>
            <Review/>
        </div>
    );
};

export default Home;