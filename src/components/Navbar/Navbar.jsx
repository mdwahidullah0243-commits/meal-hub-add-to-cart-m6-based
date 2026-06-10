import { navItemList } from "../../lib/navItemList";
import NavItem from "../ui/NavItem";
import foodMeal from '../../assets/food-meal.png';
import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import CartItem from "../CartItem/CartItem";
import EmptyCart from "../ui/EmptyCart";
import { removeAllFoodItemFromLocalStorage } from "../../lib/localStorage";


const Navbar = ({ addToCart, setAddToCart }) => {
    const [isActive, setIsActive] = useState('Home');

    const navItems = navItemList.map(item => (
        <NavItem
            key={item.id}
            item={item}
            isActive={isActive}
            setIsActive={setIsActive} />
    ));

    const handleClearAll = () => {
        setAddToCart([]);

        removeAllFoodItemFromLocalStorage('clear');
    }

    return (
        <div className="bg-[#deb887] py-1 shadow-sm">
            <div className="navbar w-11/12 mx-auto">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                        </div>
                        <ul
                            tabIndex="-1"
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                            {navItems}
                        </ul>
                    </div>

                    <div className='flex items-center gap-3'>
                        <div className='w-12.5'>
                            <img className='w-full rounded-full' src={foodMeal} alt="" />
                        </div>

                        <h2 className="text-slate-800 text-2xl font-semibold font-inter">
                            Meal Hub
                        </h2>
                    </div>
                </div>

                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal gap-3 px-1">
                        {navItems}
                    </ul>
                </div>

                <div className="navbar-end gap-10">
                    <div className="drawer drawer-end w-2">
                        <input id="my-drawer-5" type="checkbox" className="drawer-toggle" />

                        <div className="drawer-content">
                            <label htmlFor="my-drawer-5" className="relative drawer-button">
                                <FaShoppingCart className="text-2xl cursor-pointer" />
                                <span className="absolute inset-e-0 -top-4 -right-6 btn btn-error px-1 h-auto py-0.3 text-slate-200 rounded-full font-inter">{addToCart.length}</span>
                            </label>
                        </div>

                        <div className="drawer-side">
                            <label htmlFor="my-drawer-5" aria-label="close sidebar" className="drawer-overlay"></label>
                            {/* Sidebar content here */}
                            <div className="bg-base-200 min-h-full w-80 p-4">
                                <div className="flex justify-between items-center pb-2 border-b border-slate-300">
                                    <h3 className="font-inter text-xl font-semibold">
                                        Shopping Cart
                                    </h3>

                                    <button onClick={handleClearAll} className="btn btn-error h-auto py-1 px-2 text-slate-200">
                                        Clear All
                                    </button>
                                </div>

                                {
                                    addToCart.length === 0
                                        ?
                                        <EmptyCart />
                                        :
                                        <>
                                            <div className="divide-y divide-[#31303025] h-100 overflow-auto no-scrollbar">
                                                {
                                                    addToCart.map(item => (
                                                        <CartItem
                                                            key={item.idMeal}
                                                            item={item}
                                                            addToCart={addToCart}
                                                            setAddToCart={setAddToCart} />
                                                    ))
                                                }
                                            </div>

                                            <div className="border-t border-slate-300 space-y-5">
                                                <div className="flex justify-between items-center pt-3">
                                                    <h3 className="text-base font-medium">Subtotal:</h3>
                                                    <p className="text-base font-medium">
                                                        $ {1360 * addToCart.length}
                                                    </p>
                                                </div>

                                                <button className="btn btn-neutral w-full rounded-xl h-auto py-2 shadow-none text-shadow-none text-lg hover:bg-[#0082fc] border-none">
                                                    Checkout
                                                </button>
                                            </div>
                                        </>
                                }

                            </div>
                        </div>
                    </div>

                    <button className="btn btn-info rounded-full text-base">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Navbar;