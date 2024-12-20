import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import Swal from 'sweetalert2'
import useAxiosPublic from "../hooks/useAxiosPublic";
import toast from 'react-hot-toast'
import useCart from "../hooks/useCart";


const Card = ({ food }) => {
    const { name, image, price, category } = food;
    const { user } = useAuth()
    const [, , refetch] = useCart();
    const axiosPublic = useAxiosPublic();
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
        } else {
            const cartItem = {
                name,
                image,
                price,
                category,
                author: {
                    name: user?.displayName,
                    email: user?.email,
                    photo: user?.photoURL,
                }
            }

          axiosPublic.post('/cart', cartItem)
          .then(res =>{
            if(res.data.insertedId){
                toast.success('Add to cart!')
                refetch();                
            }
          })
            
        }


    }
    return (
        <div className="space-y-2 border bg-gray-50 rounded-xl min-h-[320px] flex flex-col">
            <div className="flex-grow">
                <div className="flex items-center justify-center">
                    <img src={image} alt="" className="w-full h-48 max-h-44 object-cover rounded-t-xl" />
                </div>
                <div className="px-2 pt-4">
                    <h3 className="text-xl font-semibold">{
                        name.length > 18 ? `${name.slice(0, 18)}...` : name}</h3>
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