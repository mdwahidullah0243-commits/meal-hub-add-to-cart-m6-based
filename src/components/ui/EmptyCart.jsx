import emptyCart from '../../assets/empty-cart.png';

const EmptyCart = () => {
    return (
        <div className="space-y-7 min-h-[80vh] flex flex-col justify-center items-center">
            <img src={emptyCart} alt="Empty Cart" />

            <div className="space-y-3">
                <p className="font-inter text-lg font-medium text-center">
                    Your Cart is empty
                </p>

                <button className="btn bg-[#5e00da] text-white shadow-none text-lg h-auto py-2 px-5 hover:bg-[#00c0c0]">
                    Go To Products
                </button>
            </div>
        </div>
    );
};

export default EmptyCart;