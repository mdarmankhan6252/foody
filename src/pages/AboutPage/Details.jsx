import video_1 from '../../assets/about.mp4'

const Details = () => {
   return (
      <div className='flex items-center justify-between flex-col sm:flex-row my-20 gap-y-8'>
         <div className='basis-[40%]'>
            <video src={video_1} autoPlay loop muted playsInline className='w-full sm:max-h-[600px] max-h-[400px] rounded-xl object-cover'></video>
         </div>
         <div className='basis-[55%] space-y-6'>
            <h1 className='text-4xl sm:text-6xl font-semibold font-serif'><span className='text-[#fb320f]'>Foody</span> <br /> <span>Restaurant</span></h1>
            <p className='sm:text-2xl text-xl font-light'>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
            <h4>Mon - Fri <span className='font-semibold'>8 AM - 11 PM</span></h4>
            <h2 className='text-xl sm:text-4xl font-semibold text-[#b3b1b1]'>+880 1875778050</h2>
         </div>
      </div>
   );
};

export default Details;