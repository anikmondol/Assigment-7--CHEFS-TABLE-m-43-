
import SingleCart from "../SingleCart/SingleCart";
import PropTypes from 'prop-types'; // ES6


const LeftSide = ({handleAddToCar, carts}) => {
    

  
    return (
        <div className="md:selection:w-[60%]  flex flex-col md:flex-row md:justify-evenly gap-4 ">
            {
                carts.map((cart, index) => <SingleCart key={index} cart={cart} handleAddToCar={handleAddToCar} ></SingleCart>)
            }
        </div>
    );
};



LeftSide.propTypes = {
    carts: PropTypes.array.isRequired,
    handleAddToCar:PropTypes.func.isRequired
}

export default LeftSide;