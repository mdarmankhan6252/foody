
const Review = () => {
   return (
      <div>

         <div className="text-center pt-20 pb-10">
            <h2 className="text-2xl font-semibold sm:text-4xl">What Our Clients Say</h2>
            <p className="font-light">Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae saepe accusantium minus.</p>
         </div>

         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border hover:scale-[1.02] duration-300">
               <div className="flex justify-center -mt-16 md:justify-end">
                  <img className="object-cover w-20 h-20 border-2 border-red-500 rounded-full" alt="Testimonial avatar" src="https://simgbb.com/avatar/6YGwSWkXwQ0Y.jpg" />
               </div>

               <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">MD Arman khan</h2>

               <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

               <div className="flex justify-end mt-4">
                  <p>HR, XYZ Company</p>
               </div>
            </div>
            <div className="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border hover:scale-[1.02] duration-300">
               <div className="flex justify-center -mt-16 md:justify-end">
                  <img className="object-cover w-20 h-20 border-2 border-red-500 rounded-full" alt="Testimonial avatar" src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=400" />
               </div>

               <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">SA Shahzoda</h2>

               <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

               <div className="flex justify-end mt-4">
                  <p>CEO, Benglo IT</p>
               </div>
            </div>
            <div className="w-full px-8 py-4 mt-16 bg-white rounded-lg shadow-lg border hover:scale-[1.02] duration-300">
               <div className="flex justify-center -mt-16 md:justify-end">
                  <img className="object-cover w-20 h-20 border-2 border-red-500 rounded-full" alt="Testimonial avatar" src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=400" />
               </div>

               <h2 className="mt-2 text-xl font-semibold text-gray-800 md:mt-0">Sadixova</h2>

               <p className="mt-2 text-sm text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae dolores deserunt ea doloremque natus error, rerum quas odio quaerat nam ex commodi hic, suscipit in a veritatis pariatur minus consequuntur!</p>

               <div className="flex justify-end mt-4">
                  <p>CEO, Tata Ltd.</p>
               </div>
            </div>
         </div>

      </div>
   );
};

export default Review;