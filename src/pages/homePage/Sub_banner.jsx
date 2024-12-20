import img from '../../assets/sub_banner.jpg'

const Sub_banner = () => {
   return (
      <div className='bg-gradient-to-tr from-purple-50 to-red-50 flex items-center justify-between max-h-[450px] rounded-xl '>
         <div className='basis-[35%]'>
            <img src={img} alt="banner_img" className='w-full max-h-[450px] object-cover rounded-l-xl' />
         </div>
         <div className='basis-[60%] pr-4 sm:pr-8 space-y-5'>
            <h1 className='text-2xl sm:text-4xl md:text-6xl font-extrabold font-serif'>A new way to experience food</h1>
            <h3 className='text-xl sm:text-3xl font-light'>Enjoy our seasonal menu and experience the beauty of naturalness</h3>
         </div>
      </div>
   );
};

export default Sub_banner;