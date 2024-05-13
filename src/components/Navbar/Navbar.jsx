import { CiSearch } from "react-icons/ci";
import { MdManageAccounts } from "react-icons/md";



const Navbar = () => {
    return (
        <div className="flex md:flex-row justify-between mt-5 items-center mx-5 md:mx-0">
            <div>
                <button className="hidden md:flex text-[20px] font-semibold hover:bg-slate-300 p-2 rounded-md">Recipe Calories</button>
            </div>
            <div className="flex  gap-5 md:gap-5 mx-auto">
                <a href="#"><button>Home</button></a>
                <a href="#"><button>Recipes</button></a>
                <a href="#"><button>About</button></a>
                <a href="#"><button>Search</button></a>
            </div>
            <div className="hidden md:flex  items-center gap-2">
               <div className="bg-gray-300 flex items-center gap-2 p-2 rounded-lg">
               <p className="text-2xl"><CiSearch /></p>
                <input
                    className="bg-gray-300 md:w-24 lg:w-full"
                    placeholder="Search" type="text" />
               </div>

                <p className="text-3xl text-slate-300 bg-green-600 p-2 rounded-full">< MdManageAccounts /></p>
                
            </div>
        </div>
    );
};

export default Navbar;