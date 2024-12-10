import { Outlet } from "react-router-dom";
import Nav from "../components/Nav";

const Root = () => {
    return (
        <div className="">
            <div className="max-w-7xl mx-auto px-3">
                <div className="h-[80px]">
                <Nav />
                </div>
                <Outlet />

            </div>



        </div>
    );
};

export default Root;