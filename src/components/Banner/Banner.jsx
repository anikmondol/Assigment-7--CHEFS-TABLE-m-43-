
import './Banner.css'

const Banner = () => {
    return (
        <div className='background_container flex items-center justify-center rounded-lg'>
            <div className='flex flex-col gap-4 justify-center items-center px-1'>
                <h1 className='text-center text-3xl md:text-4xl text-white font-medium'>Discover an exceptional cooking class tailored for you!</h1>
                <p className='text-center text-slate-300'>Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ <br /> coding problems to become an exceptionally well world-class Programmer.</p>
                <div className='flex gap-5'>
                    <button className='bg-green-600 p-3 rounded-full font-medium'>Explore Now</button>
                    <button className='border p-3 rounded-full text-white font-medium'>Our Feedback</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;