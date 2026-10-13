import FoodCard from "@/components/FoodCard";

const FoodsPage = async () => {

    const res = await fetch("https://phi-lab-server.vercel.app/api/v1/lab/foods");
    const foodsData = await res.json();
    const foods = foodsData.data;
    return (
        <div className="mx-5">
            <h2 className="mx-5 my-4">Foods: {foods.length}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-5">
                {
                    foods.map(food => <FoodCard key={food.id} food={food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodsPage;