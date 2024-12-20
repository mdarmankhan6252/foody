import DashboardTitle from "../Shared/DashboardTitle";
import Swal from 'sweetalert2'
import toast from 'react-hot-toast'
import useAxiosPublic from "../hooks/useAxiosPublic";
import useUsers from "../hooks/useUsers";

const AllUsers = () => {

    const axiosPublic = useAxiosPublic();
    const [users, refetch] = useUsers();

    

    const handleDelete = () => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                toast.error('Sorry, You are not able to delete.')
                // axiosPublic.delete(`/user/${id}`)
                //     .then(res => {
                //         if (res.data.deletedCount > 0) {
                //             Swal.fire({
                //                 title: "Deleted!",
                //                 text: "Your file has been deleted.",
                //                 icon: "success"
                //             });
                //             refetch()
                //         }
                //     })

            }
        });
    }

    // admin update
    const handleAdminUpdate = id => {
        console.log(id);
        const role = { role: 'admin' }
        axiosPublic.patch(`/user/${id}`, role)
            .then(res => {
                if(res.data.modifiedCount > 0){
                    toast.success('User has been updated')
                    refetch()

                }
                
            })
    }

    console.log(users);
    return (
        <div>
            <DashboardTitle title="Manage All Users" desc="Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, laboriosam." />

            <div className="">
                <div className="overflow-x-auto">
                    <table className="min-w-full text-xs border *:border">
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <thead>
                            <tr className="text-left">
                                <th className="p-3">SL</th>
                                <th className="p-3">Photo</th>
                                <th className="p-3">Name</th>
                                <th className="p-3">Email</th>
                                <th className="p-3">Role</th>
                                <th className="p-3">Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                users.map((user, i) => <tr key={i} className="border">
                                    <td className="p-3">
                                        <p>{i + 1}</p>
                                    </td>
                                    <td className="p-3">
                                        <img src={user.photo} className="w-10 h-10 object-cover" />
                                    </td>
                                    <td className="p-3">
                                        <p>{user.name}</p>
                                    </td>
                                    <td className="p-3">
                                        <p>{user.email}</p>
                                    </td>
                                    <td onClick={() => handleAdminUpdate(user._id)} className="p-3 cursor-pointer">
                                        <p className={user.role === 'general' ? 'text-blue-600' : 'text-green-600'}>{user.role}</p>
                                    </td>

                                    <td onClick={() => handleDelete(user._id)} className="p-3">
                                        <span className="px-3 py-1 font-semibold rounded-md bg-red-500 text-white cursor-pointer">
                                            <span>Delete</span>
                                        </span>
                                    </td>
                                </tr>)
                            }



                        </tbody>
                    </table>
                </div>
            </div>

        </div>
    );
};

export default AllUsers;