import Title from "../../Shared/Title";
import Banner from "./Banner";
import FoodCategory from '../../pages/homePage/FoodCategory';

const Home = () => {
    return (
        <div>
            <Banner />
            <Title title="Popular Now" />
            <FoodCategory category="popular"/>
            <Title title="Pizza" />
            <FoodCategory category="pizza"/>
            <Title title="Dessert" />
            <FoodCategory category="dessert"/>
            <Title title="Salad" />
            <FoodCategory category="salad"/>
        </div>
    );
};

export default Home;