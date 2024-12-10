import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'


const Card = ({ food }) => {
    const { name, image, price } = food;
    const { user } = useAuth()
    const navigate = useNavigate();

    const handleConfirm = () => {

        if (!user) {
            return Swal.fire({
                title: "Did you do login ?",
                text: "You won't be able to buy unless you are not login!",
                icon: "warning",
                showCancelButton: true,
                confirmButtonColor: "#3085d6",
                cancelButtonColor: "#d33",
                confirmButtonText: "Go for login"
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login')
                }
            });
        }else{
            console.log('clicked');
        }
        

    }
    return (
        <div className="space-y-2 border bg-gray-50 rounded-xl min-h-[320px] flex flex-col">
            <div className="flex-grow">
                <div className="flex items-center justify-center">
                    <img src={image} alt="" className="w-full max-h-44 object-cover rounded-t-xl" />
                </div>
                <div className="px-2 pt-4">
                    <h3 className="text-xl font-semibold">{name}</h3>
                    <h2 className="text-[#fb320f] text-lg">$ {price}</h2>
                </div>
            </div>
            <div onClick={handleConfirm} className="px-2 pb-6">
                <button className="bg-[#fb320f] hover:bg-[#f56430] text-white text-sm font-semibold py-1.5 px-3 rounded-md cursor-pointer">Add to Cart</button>
            </div>
        </div>
    );
};

export default Card;