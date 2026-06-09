import { useEffect, useState } from "react";
import Food from "../Food/Food";

const FoodSection = ({ addToCart, setAddToCart }) => {
    const [foods, setFoods] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchingFoods = async () => {
            setLoading(true);

            const res = await fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=a');
            const data = await res.json();

            setFoods(data.meals);
            setLoading(false);
        };

        fetchingFoods();
    }, []);

    if (loading) {
        return <p className="text-center font-inter mt-10 text-2xl font-medium">Foods data loading, please wait...</p>
    };

    return (
        <div className="w-10/12 mx-auto mt-10 space-y-5">
            <h2 className="text-3xl font-semibold text-slate-800">
                All Foods
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {
                    foods.map(food => (
                        <Food
                            key={food.idMeal}
                            food={food}
                            addToCart={addToCart}
                            setAddToCart={setAddToCart} />
                    ))
                }
            </div>
        </div>
    );
};

export default FoodSection;