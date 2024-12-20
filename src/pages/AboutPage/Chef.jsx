import chef_1 from '../../assets/1.webp'
import chef_2 from '../../assets/2.webp'
import chef_3 from '../../assets/3.webp'
import chef_4 from '../../assets/4.webp'
import { CiFacebook, CiInstagram } from "react-icons/ci";
import { RiTwitterXFill } from "react-icons/ri";

const Chef = () => {
   return (
      <div>
         <h1 className="text-2xl font-serif font-semibold sm:text-4xl text-center py-16">Our Master Chef</h1>

         <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5'>
            <div>
               <div>
                  <img src={chef_2} alt="" className='w-full' />
               </div>
               <div className='pt-5 space-y-2'>
                  <h3 className='text-2xl font-serif text-gray-800'>John Smooth</h3>
                  <p className='text-[#a29f9f]'>Restaurant Owner</p>
                  <div className='flex items-center space-x-2 *:text-2xl *:cursor-pointer hover:*:text-[#fb320f]'>
                     <CiFacebook />
                     <CiInstagram />
                     <RiTwitterXFill />
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <img src={chef_1} alt="" className='w-full' />
               </div>
               <div className='pt-5 space-y-2'>
                  <h3 className='text-2xl font-serif text-gray-800'>Rebeca Welson</h3>
                  <p className='text-[#a29f9f]'>Head Chef</p>
                  <div className='flex items-center space-x-2 *:text-2xl *:cursor-pointer hover:*:text-[#fb320f]'>
                     <CiFacebook />
                     <CiInstagram />
                     <RiTwitterXFill />
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <img src={chef_3} alt="" className='w-full' />
               </div>
               <div className='pt-5 space-y-2'>
                  <h3 className='text-2xl font-serif text-gray-800'>Kharl Branyt</h3>
                  <p className='text-[#a29f9f]'>Chef</p>
                  <div className='flex items-center space-x-2 *:text-2xl *:cursor-pointer hover:*:text-[#fb320f]'>
                     <CiFacebook />
                     <CiInstagram />
                     <RiTwitterXFill />
                  </div>
               </div>
            </div>
            <div>
               <div>
                  <img src={chef_4} alt="" className='w-full' />
               </div>
               <div className='pt-5 space-y-2'>
                  <h3 className='text-2xl font-serif text-gray-800'>Luke Simon</h3>
                  <p className='text-[#a29f9f]'>Chef</p>
                  <div className='flex items-center space-x-2 *:text-2xl *:cursor-pointer hover:*:text-[#fb320f]'>
                     <CiFacebook />
                     <CiInstagram />
                     <RiTwitterXFill />
                  </div>
               </div>
            </div>


         </div>

      </div>
   );
};

export default Chef;