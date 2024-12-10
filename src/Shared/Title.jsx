import { IoIosArrowForward } from "react-icons/io";
const Title = ({title}) => {
    return (
        <div>
            <h1 className="text-xl font-semibold sm:text-2xl flex items-center space-x-1">
                <span>{title}</span>
                <IoIosArrowForward className="-mb-2"/>
            </h1>
        </div>
    );
};

export default Title;