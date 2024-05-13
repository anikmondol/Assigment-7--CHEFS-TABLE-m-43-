import PropTypes from 'prop-types'; // ES6


const SingleRightSide = ({cart, handleCurrently}) => {
    const { recipe_id, Recipe_name, Calories, Preparing_time} = cart;
    return (
        <div className="bg-slate-200 p-4 rounded-xl">
              <div className="space-y-5">           
               
                <div className="flex flex-col md:flex-row gap-3 ">
                <div className="flex text-[#878787] font-medium">
                    <p>{recipe_id}.</p>
                <div className="flex">
                    <p className="ml-5 lg:ml-9">{Recipe_name}</p>
                    <p className="mx-5 lg:mx-20">{Preparing_time} minutes</p>
                    <p className="ml-0 lg:ml-4">{Calories} calories</p>
                </div>
                </div>
                <button onClick={()=> handleCurrently(cart)} className="bg-[#0BE58A] p-1 rounded-3xl">Preparing</button>
                </div>
                
            </div>
        </div>
    );
};


SingleRightSide.propTypes = {
    cart: PropTypes.object.isRequired,
    handleCurrently: PropTypes.func
}


export default SingleRightSide;