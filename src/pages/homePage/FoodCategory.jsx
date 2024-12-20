import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination, Navigation } from 'swiper/modules';
import Card from '../../components/Card';
import useFood from '../../hooks/useFood';

const FoodCategory = ({ category }) => {

    

    const [foods, isLoading] = useFood();
    if(isLoading){
        return <p>...</p>
    }

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
                breakpoints={{
                    320: { slidesPerView: 1 },   // Extra small devices
                    480: { slidesPerView: 2 },   // Small devices
                    768: { slidesPerView: 3 },   // Medium devices
                    1024: { slidesPerView: 4 },  // Large devices
                    1280: { slidesPerView: 5 },  // Extra large devices
                }}
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





