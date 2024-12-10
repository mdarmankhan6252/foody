import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const { createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate();

    const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`

    const handleRegister = async e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const currentPhoto = form.photo.files[0];
        const email = form.email.value;
        const password = form.password.value;
        if (!currentPhoto) {
            return toast.error('Please upload a photo!')
        }
        const formData = new FormData();
        formData.append("image", currentPhoto);

        const res = await axiosPublic.post(imageUpload, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        console.log(res.data);

        const photo = res.data.data.display_url;
        console.log(photo);
        if (res.data.success) {
            await createUser(email, password)
            .then(result =>{
                console.log(result);
                updateUserProfile(name, photo)
                toast.success("You have created an account successfully!")
                form.reset();
                navigate('/')
            })
            .catch(err =>{
                console.log(err);
                toast.error(err.message)
            })
        }
    }
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <form onSubmit={handleRegister} className="w-[500px] max border p-6 space-y-5 shadow-[0px_0px_10px_0px] shadow-gray-300 rounded-xl *:w-full">
                <h2 className="text-xl sm:text-2xl font-semibold">Create Your Account</h2>
                <input type="name" name="name" placeholder="Your Name" required className="border p-2 text-[15px] font-semibold text-gray-600" />
                <input type="file" name="photo" required className="border p-2 text-[15px] font-semibold text-gray-600" />
                <input type="email" name="email" placeholder="Email" required className="border p-2 text-[15px] font-semibold text-gray-600" />
                <input type="password" name="password" placeholder="******" required className="border p-2 text-[15px] font-semibold text-gray-600" />
                <input type="submit" value="Login" className="border p-2 text-[15px] font-semibold text-gray-600 cursor-pointer bg-gray-200 hover:bg-gray-300 active:scale-[0.98]" />
                <hr />
                <div className="flex items-center justify-center space-x-2 bg-[#fcf7f6] p-2 cursor-pointer active:scale-[0.98]">
                    <FcGoogle className="text-2xl" />
                    <span className="font-semibold">Google</span>
                </div>
                <p className="text-center">Already Have an Account ? <Link to='/login' className=" font-semibold hover:underline">Login</Link></p>

            </form>
        </div>
    );
};

export default Register;