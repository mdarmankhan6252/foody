import banner from '../../assets/banner.png'
import img_1 from '../../assets/1-1.png'
import img_2 from '../../assets/12.png'
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className='flex items-center justify-between py-12 flex-col sm:flex-row gap-y-6'>
            <div className='basis-[50%] space-y-6'>
                <h3 className='font-serif font-light  text-green-600 bg-green-50 w-24 text-center border border-green-100 py-1 px-4 italic'>10% Off</h3>
                <h1 className="text-5xl font-extrabold md:text-6xl font-serif" style={{ lineHeight: '4rem' }}>
                    Savor the Taste of Excellence in <span className="text-[#fb320f]">Foody</span>
                </h1>

                <p className="text-[#868383] font-light">Indulge in a culinary journey with our expertly crafted dishes, made from the finest ingredients to bring you an unforgettable dining experience. Join us and treat your taste buds to something extraordinary.</p>
                <Link to='/allItems' className="btn">See Our Items</Link>
            </div>
            <div className='basis-[40%] relative'>
                <img src={banner} alt="" className='w-full rounded-t-full' />
                <img src={img_1} alt="" className='absolute top-20 -left-28 w-44' />
                <img src={img_2} alt="" className='absolute bottom-8 -left-20 w-36' />
            </div>
        </div>
    );
};

export default Banner;