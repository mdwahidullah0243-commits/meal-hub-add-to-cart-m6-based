import { useState } from "react";
import { FaBangladeshiTakaSign } from "react-icons/fa6";

const Food = ({ food, addToCart, setAddToCart }) => {
    const [addToCartContent, setAddToCartContent] = useState(false);
    const { strMealThumb, strMeal } = food;

    const handleAddToCart = () => {
        setAddToCartContent(true);
        setAddToCart([...addToCart, food]);
    };

    return (
        <div className='border border-[#9999996e] rounded-xl p-5 space-y-3'>
            <div className="relative">
                <img className='w-full rounded-tr-xl rounded-tl-xl' src={strMealThumb} alt="" />
                <div className="badge badge-error absolute inset-e-0 top-0 font-medium"><FaBangladeshiTakaSign /> 1360</div>
            </div>

            <h3 className="text-xl font-semibold text-slate-800">
                <span className="text-slate-600">Food: </span>
                <span className="font-medium">{strMeal}</span>
            </h3>

            <button
                onClick={handleAddToCart}
                className={`btn text-slate-200 font-medium shadow-none text-lg rounded-full w-full ${addToCartContent ? 'bg-[#01c077]' : 'bg-[#252424]'}`}>
                {addToCartContent ? 'Successfully Added!' : 'Add to Cart'}
            </button>
        </div>
    );
};

export default Food;