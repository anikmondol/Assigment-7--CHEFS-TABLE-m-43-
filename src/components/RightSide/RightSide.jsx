import PropTypes from 'prop-types'; // ES6
import SingleCurrently from "../SingleCurrently/SingleCurrently";
import SingleRightSide from "../SingleRightSide/SingleRightSide";



const RightSide = ({ numberCount, handleCurrently, currently }) => {
    return (
        <div className="w-full lg:w-[40%]  mx-auto p-3 border rounded-lg">
            <div className="space-y-3">
                <h2 className="text-center text-[#282828] text-2xl font-semibold">Want to cook: {numberCount.length}</h2>
                <hr className="font-normal text-3xl h-4" />
                <div>
                    <div className="flex mx-10 gap-[75px] md:gap-20 lg:gap-36 text-[#878787] font-medium">
                        <p>Name</p>
                        <p>Time</p>
                        <p>Calories</p>
                    </div>
                </div>
                {
                    numberCount.map((cart, index) => <SingleRightSide key={index} cart={cart} handleCurrently={handleCurrently}></SingleRightSide>)
                }

            </div>
            <div className="space-y-3">
                <h2 className="text-center text-[#282828] text-2xl font-semibold">Want to cook: {currently.length}</h2>
                <hr className="font-normal text-3xl h-4 mt-3" />
                {
                    currently.map((element, index) => <SingleCurrently key={index} element={element}></SingleCurrently>)
                }
            </div>


        </div>
    );
};


RightSide.propTypes = {
    numberCount: PropTypes.array.isRequired,
    handleCurrently: PropTypes.func.isRequired,
    currently: PropTypes.array.isRequired
}

export default RightSide;