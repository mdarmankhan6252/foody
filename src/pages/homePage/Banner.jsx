import banner from '../../assets/banner.jpg'
const Banner = () => {
    return (
        <div className='flex items-center justify-between py-12 flex-col sm:flex-row gap-y-6'>
            <div className='basis-[60%] space-y-6'>
                <h1 className="text-2xl font-bold sm:text-4xl md:text-5xl font-serif" style={{ lineHeight: '4rem' }}>
                    Savor the Taste of Excellence in <span className="text-[#fb320f]">Foody</span>
                </h1>

                <p className="text-[#868383] font-light">Indulge in a culinary journey with our expertly crafted dishes, made from the finest ingredients to bring you an unforgettable dining experience. Join us and treat your taste buds to something extraordinary.</p>
                <button className="btn">See Our Items</button>
            </div>
            <div className='basis-[38%]'>
                <img src={banner} alt="" className='w-full rounded-t-full max-w-96' />
            </div>
        </div>
    );
};

export default Banner;