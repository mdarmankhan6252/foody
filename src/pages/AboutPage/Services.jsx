import { BsCake } from "react-icons/bs";
import { LuTent } from "react-icons/lu";
import { TbMessageChatbot } from "react-icons/tb";

const Services = () => {
   return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">

         <div className="text-center flex items-center justify-center flex-col space-y-2 border-2 p-5 hover:border-red-500 duration-300">
            <BsCake className="text-5xl text-[#fb320f]" />
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#8f8a8a]">Birthday Party</h3>
            <p className="text-xl font-light">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

         </div>
         <div className="text-center flex items-center justify-center flex-col space-y-2 border-2 p-5 hover:border-red-500 duration-300">
            <TbMessageChatbot className="text-5xl text-[#fb320f]" />
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#8f8a8a]">Business Meetings</h3>
            <p className="text-xl font-light">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

         </div>
         <div className="text-center flex items-center justify-center flex-col space-y-2 border-2 p-5 hover:border-red-500 duration-300">
            <LuTent className="text-5xl text-[#fb320f]" />
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#8f8a8a]">Wedding Party</h3>
            <p className="text-xl font-light">Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>

         </div>

      </div>
   );
};

export default Services;