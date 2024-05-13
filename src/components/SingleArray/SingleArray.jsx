import PropTypes from 'prop-types'; // ES6

const SingleArray = ({ item }) => {
    return (
        <ul className="flex text-[#878787] space-y-0">
            
            <li><span className="text-3xl mr-2">.</span>{item}</li>

        </ul>
    );
};

SingleArray.propTypes = {
    item: PropTypes.string.isRequired,
    
}

export default SingleArray;