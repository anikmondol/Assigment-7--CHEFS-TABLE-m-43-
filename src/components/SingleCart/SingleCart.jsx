import SingleArray from "../SingleArray/SingleArray";
import { IoMdTime } from "react-icons/io";
import { RiFireLine } from "react-icons/ri";
import PropTypes from 'prop-types'; // ES6


const SingleCart = ({ cart, handleAddToCar}) => {
    const { Recipe_image, recipe_id, Recipe_name, Short_description, Ingredients_array, Calories, Preparing_time } = cart;
    return (
        <div className="border p-5 rounded-lg">
            <div className="space-y-2">
                <img className="mx-auto" src={Recipe_image} alt="" />
                <h3 className="text-[#282828] text-[20px] font-semibold">{Recipe_name}</h3>
                <p className="text-[#878787]">{Short_description}</p>
                <hr />
                <h5 className="text-[#282828] text-[18px] font-medium">Ingredients: {Ingredients_array.length}</h5>
                {
                    Ingredients_array.map((item, index) => <SingleArray key={index} item={item}></SingleArray>)
                }
                <hr />
                <div className="flex justify-between md:flex-col md:gap-3 lg:flex-row lg:justify-between ">
                    <div className="flex items-center gap-[2px] text-[#282828]">
                        <IoMdTime className="text-xl"></IoMdTime>
                        <p>{Preparing_time} minutes</p>
                    </div>
                    <div>
                        <div className="flex items-center gap-[2px] text-[#282828]">
                            <RiFireLine className="text-xl"></RiFireLine>
                            <p>{Calories} calories</p>
                        </div>
                    </div>
                </div>
                <button onClick={() => handleAddToCar(recipe_id, cart)} className="bg-[#0BE58A] p-3 text-[18px] rounded-full font-medium">Want to Cook</button>
            </div>
        </div>
    );
};


SingleCart.propTypes = {
    cart: PropTypes.object.isRequired,
    handleAddToCar:PropTypes.func.isRequired
}


export default SingleCart;