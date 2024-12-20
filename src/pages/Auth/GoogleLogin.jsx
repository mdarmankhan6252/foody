import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import toast from "react-hot-toast";
import { FcGoogle } from "react-icons/fc";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const GoogleLogin = () => {
   const { signInWithGoogle } = useAuth();
   const navigate = useNavigate();
   const axiosPublic = useAxiosPublic();

   const handleGoogleLogin = async () => {
      await signInWithGoogle()
         .then(result => {
            if (result.user) {

               const postedUser = {
                  name: result?.user?.displayName,
                  email: result?.user?.email,
                  photo: result?.user?.photoURL,
                  role: 'general'
               }
               console.log(postedUser);

               axiosPublic.post(`/user?email=${result?.user?.email}`, postedUser).then(() => { })
               toast.success("Sign In successful!")
               navigate('/')

            }
         })
         .catch(error => {
            if (error.message) {
               toast.error('Something went wrong!')
            }
         })
   }
   return (
      <div onClick={handleGoogleLogin} className="flex items-center justify-center space-x-2 bg-[#fcf7f6] p-2 cursor-pointer active:scale-[0.98]">
         <FcGoogle className="text-2xl" />
         <span className="font-semibold">Google</span>
      </div>
   );
};

export default GoogleLogin;