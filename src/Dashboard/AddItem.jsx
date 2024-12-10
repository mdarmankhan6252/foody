import DashboardTitle from "../Shared/DashboardTitle";

const AddItem = () => {
    return (
        <div>
            <DashboardTitle title="Add Food Item" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam."/>  

            <div>
                <form>
                    <input type="name" placeholder="Item Name" required />
                    <input type="name" placeholder="Item Name" required />
                </form>
            </div> 
        </div>
    );
};

export default AddItem;