import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Card from '../../components/Card';
import { useEffect, useState } from 'react';

const FoodCategory = ({ category }) => {

    const [foods, setFoods] = useState([]);
    useEffect(() => {
        fetch('foods.json')
            .then(res => res.json())
            .then(data => setFoods(data))
    }, [])

    console.log(foods);

    return (
        <div className='py-10'>
            <Swiper
                slidesPerView={5}
                spaceBetween={20}
                loop={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Pagination, Navigation]}
                className="mySwiper"
            >

                {
                    foods.filter(food => food.category === category).map((food, i) => <SwiperSlide key={i} className='mb-12'>
                        <Card food={food} />
                    </SwiperSlide>)
                }

            </Swiper>

        </div>
    );
};

export default FoodCategory;





