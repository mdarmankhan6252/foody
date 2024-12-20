import { Link, Navigate, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import GoogleLogin from "./GoogleLogin";
import { PiSpinnerGapThin } from "react-icons/pi";
import { useState } from "react";

const Register = () => {

    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false)
    
    const { createUser, updateUserProfile, user, setUser } = useAuth()
    if(user){
        return <Navigate to='/'></Navigate>
    }
    

    const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`

    

    const handleRegister = async e => {
        e.preventDefault();
        setLoading(true)
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
                .then(result => {
                    console.log(result);
                    updateUserProfile(name, photo)
                    setUser({ ...user, displayName: name, photoURL: photo })

                    const postedUser = {
                        name,
                        email,
                        photo,
                        role: 'general'
                    }

                    axiosPublic.post('/user', postedUser).then(res => {
                        if (res.data.insertedId) {
                            toast.success("You have created an account successfully!")
                            form.reset();
                            navigate('/')
                            setLoading(false)
                        }
                    })


                })
                .catch(err => {
                    console.log(err);
                    toast.error(err.message)
                    setLoading(false)
                })
        }
    }
    return (
        <div className="flex items-center justify-center w-full h-screen px-3">
            <form onSubmit={handleRegister} className="w-[400px] border px-6 py-12 space-y-5 shadow-[0px_0px_10px_0px] shadow-gray-300 rounded-xl bg-gray-100">
                <h2 className="text-2xl sm:text-3xl font-bold text-center pb-4">Create Your Account</h2>
                <div>
                    <p className="text-sm pb-1">Your Name : </p>
                    <input type="name" name="name" placeholder="Your Name" required className="border p-2 text-[15px] font-semibold text-gray-600 w-full outline-red-400 bg-gray-200 rounded-lg" />

                </div>
                <div>
                    <p className="text-sm pb-1">Your photo : </p>
                    <input type="file" name="photo" required className="border p-2 text-[15px] font-semibold text-gray-600 w-full bg-gray-200 rounded-lg" />
                </div>
                <div>
                    <p className="text-sm pb-1">Email address : </p>
                    <input type="email" name="email" placeholder="Email" required className="border p-2 text-[15px] font-semibold text-gray-600 w-full outline-red-400 bg-gray-200 rounded-lg" />

                </div>

                <div>
                    <p className="text-sm pb-1">Password : </p>
                    <input type="password" name="password" placeholder="******" required className="border p-2 text-[15px] font-semibold text-gray-600 w-full outline-red-400 bg-gray-200 rounded-lg" />
                </div>

                <button type="submit" className="p-2.5 text-[15px] font-semibold cursor-pointer hover:bg-[#e53e21] active:scale-[0.99] w-full bg-[#e53e21] text-white duration-200 rounded-lg">
                    {
                        loading ? <PiSpinnerGapThin className="text-2xl mx-auto animate-spin " /> : <span>Register</span>
                    }
                </button>
                <hr />
                <GoogleLogin />
                <p className="text-center text-sm">Already Have an Account ? <Link to='/login' className=" font-semibold hover:underline">Login</Link></p>

            </form>
        </div>
    );
};

export default Register;