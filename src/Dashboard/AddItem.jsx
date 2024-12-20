import toast from "react-hot-toast";
import DashboardTitle from "../Shared/DashboardTitle";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { ImSpinner9 } from "react-icons/im";
import { useState } from "react";

const AddItem = () => {
    const axiosPublic = useAxiosPublic();
    const [loading, setLoading] = useState(false)
    const imageUpload = `https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_ImgBB_api_key}`

    const handleAddItem = async e => {
        e.preventDefault();
        setLoading(true)
        const form = e.target;
        const name = form.name.value;
        const currentImage = form.image.files[0];
        const category = form.category.value;
        const price = parseFloat(form.price.value);
        const recipe = form.recipe.value;


        if (!currentImage) {
            return toast.error('Please upload a photo!')
        }

        const formData = new FormData();
        formData.append("image", currentImage);

        const res = await axiosPublic.post(imageUpload, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })

        console.log(res.data);

        const image = res.data.data.display_url;
        console.log(image);

        const items = {
            name, image, category, price, recipe
        }


        if (res.data.success) {

            axiosPublic.post('/food', items)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('Food has been added successfully!')
                        form.reset();
                        setLoading(false)

                    }
                })
        }

    }







    return (
        <div>
            <DashboardTitle title="Add Food Item" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam." />

            <div>
                <form onSubmit={handleAddItem} className="bg-[#f5f3f3] shadow-[0px_0px_7px_0px] shadow-gray-300 p-8  border rounded-xl max-w-2xl mx-auto *:p-2 *:border *:w-full space-y-5 *:rounded-md">
                    <input type="text" placeholder="Item Name" name="name" required />
                    <input type="number" placeholder="Price" name="price" required />

                    <select name="category">
                        <option hidden>Select Category</option>
                        <option value="popular">Popular</option>
                        <option value="pizza">Pizza</option>
                        <option value="desert">Desert</option>
                        <option value="salad">Salad</option>
                    </select>

                    <textarea placeholder="Description" name="recipe" rows={5}></textarea>
                    <input type="file" name="image" />
                    <button type="submit" className="btn">
                        {loading ? <ImSpinner9 className="text-2xl mx-auto animate-spin"/> : <span>Add Item</span>}
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddItem;