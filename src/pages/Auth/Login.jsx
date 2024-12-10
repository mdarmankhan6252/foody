import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router-dom";
import toast from 'react-hot-toast'
import useAuth from "../../hooks/useAuth";
const Login = () => {

    const navigate = useNavigate();
    const {signIn} = useAuth();


    const handleLogin = async e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        await signIn(email, password)
            .then(result =>{
                console.log(result);
                toast.success("You have logged in successfully!")
                navigate('/')
                
            })
            .catch(err =>{
                console.log(err);
                toast.error(err.message)
            })

        
    }
    return (
        <div className="flex items-center justify-center w-full h-screen">
            <form onSubmit={handleLogin} className="min-w-[500px] border p-6 space-y-5 shadow-[0px_0px_10px_0px] shadow-gray-300 rounded-xl *:w-full">
                <h2 className="text-xl sm:text-2xl font-semibold">Login here</h2>
                <input type="email" name="email" placeholder="Email" required className="border p-2 text-[15px] font-semibold text-gray-600" />
                <input type="password" name="password" placeholder="******" required className="border p-2 text-[15px] font-semibold text-gray-600" />
                <input type="submit" value="Login" className="border p-2 text-[15px] font-semibold text-gray-600 cursor-pointer bg-gray-200 hover:bg-gray-300 active:scale-[0.98]" />
                <hr />
                <div className="flex items-center justify-center space-x-2 bg-[#fcf7f6] p-2 cursor-pointer active:scale-[0.98]">
                    <FcGoogle className="text-2xl"/>
                    <span className="font-semibold">Google</span>
                </div>
                <p className="text-center">New here ? <Link to='/register' className=" font-semibold hover:underline">Register</Link></p>

            </form>
        </div>
    );
};

export default Login;