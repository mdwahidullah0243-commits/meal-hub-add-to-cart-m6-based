import { FaBangladeshiTakaSign } from "react-icons/fa6";
import { RxCross1 } from "react-icons/rx";
import { removeFoodItemFromLocalStorage } from "../../lib/localStorage";

const CartItem = ({ item, addToCart, setAddToCart }) => {
    const handleRemoveItemFromCart = (cartItem) => {
        const filteredItemOfCart = addToCart.filter(item => item.idMeal !== cartItem.idMeal);
        setAddToCart(filteredItemOfCart);

        removeFoodItemFromLocalStorage(cartItem)
    };

    return (
        <div className="flex justify-between py-3">
            <div className="flex gap-3">
                <div>
                    <img className="size-15 rounded-xl" src={item.strMealThumb} alt="" />
                </div>

                <div>
                    <h3 className="text-base font-medium">
                        {item.strMeal.split(' ').slice(0, 3).join(' ')} ...
                    </h3>

                    <p className="flex items-center gap-1 font-medium text-cyan-500">
                        <FaBangladeshiTakaSign /> 1360
                    </p>
                </div>
            </div>

            <RxCross1 onClick={() => handleRemoveItemFromCart(item)} className="cursor-pointer" />
        </div>
    );
};

export default CartItem;