import Image from "next/image";

const FoodDetailsPage = async ({ params }) => {
    const { foodId } = await params;
    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods/${foodId}`);
    const foodData = await res.json();
    const food = foodData.data;
    const {
        id,
        dish_name,
        category,
        alternative_names,
        main_ingredients,
        approximate_nutrition_per_serving,
        rating,
        price,
        possible_price_in_dhaka,
        cuisine,
        origin_and_popularity,
        cooking_steps,
        image_link,
    } = food;

    const imageUrl = Array.isArray(image_link)
        ? image_link[0]
        : image_link;

    const nutrition = approximate_nutrition_per_serving;

    return (
        <div>
            <main className="min-h-screen bg-base-200 px-4 py-10">
                <div className="mx-auto max-w-6xl space-y-8">

                    {/* Food Header */}
                    <div className="text-center">
                        <div className="badge badge-secondary badge-lg mb-3 capitalize">
                            {category}
                        </div>

                        <h1 className="text-3xl font-bold md:text-5xl">
                            {dish_name}
                        </h1>

                        <p className="mt-3 text-base-content/70">
                            Food ID: {id}
                        </p>
                    </div>

                    {/* Main Food Card */}
                    <div className="card items-center overflow-hidden bg-base-100 shadow-xl lg:card-side">
                        <figure className="h-full w-full lg:w-1/2">
                            {imageUrl && (
                                <Image
                                    src={imageUrl}
                                    alt={dish_name}
                                    width={800}
                                    height={600}
                                    className="h-full max-h-112.5 w-full object-cover"
                                    priority
                                />
                            )}
                        </figure>

                        <div className="card-body justify-center w-full lg:w-3/4">
                            <div className="flex flex-wrap gap-2">
                                <div className="badge badge-success badge-lg">
                                    ★ {rating}/5 Rating
                                </div>

                                <div className="badge badge-outline badge-lg py-10">
                                    {cuisine}
                                </div>
                            </div>

                            <h2 className="card-title mt-3 text-2xl">
                                Food Overview
                            </h2>

                            <p className="leading-7 text-base-content/70">
                                {origin_and_popularity}
                            </p>

                            <div className="divider"></div>

                            <div className="flex items-center justify-between gap-4">
                                <span className="text-base-content/70">
                                    Listed Price
                                </span>

                                <span className="text-3xl font-bold text-primary">
                                    BDT {price}
                                </span>
                            </div>
                        </div>
                    </div>

                    {/* Alternative Names */}
                    <section className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title text-2xl">
                                Alternative Names
                            </h2>

                            <div className="flex flex-wrap gap-3">
                                {alternative_names?.map((name, index) => (
                                    <div
                                        key={index}
                                        className="badge badge-outline h-auto whitespace-normal px-4 py-3 text-sm"
                                    >
                                        {name}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Ingredients and Nutrition */}
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">

                        {/* Ingredients */}
                        <section className="card bg-base-100 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title mb-3 text-2xl">
                                    <span>🥗</span> Main Ingredients
                                </h2>

                                <ul className="space-y-3">
                                    {main_ingredients?.map(
                                        (ingredient, index) => (
                                            <li
                                                key={index}
                                                className="flex items-start gap-3"
                                            >
                                                <span className="badge badge-primary badge-sm mt-1">
                                                    {index + 1}
                                                </span>

                                                <span>{ingredient}</span>
                                            </li>
                                        )
                                    )}
                                </ul>
                            </div>
                        </section>

                        {/* Nutrition */}
                        <section className="card bg-base-100 shadow-md">
                            <div className="card-body">
                                <h2 className="card-title mb-3 text-2xl">
                                    <span>🍎</span> Nutrition Per Serving
                                </h2>

                                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                                    {Object.entries(nutrition || {}).map(
                                        ([key, value]) => (
                                            <div
                                                key={key}
                                                className="stat rounded-box bg-base-200"
                                            >
                                                <div className="stat-title capitalize">
                                                    {key.replaceAll("_", " ")}
                                                </div>

                                                <div className="text-xl text-primary">
                                                    {value}
                                                </div>
                                            </div>
                                        )
                                    )}
                                </div>

                                <p className="mt-3 text-sm text-base-content/60">
                                    Nutrition values are approximate and may
                                    vary depending on portion size and
                                    preparation.
                                </p>
                            </div>
                        </section>
                    </div>

                    {/* Price Comparison */}
                    <section className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title mb-4 text-2xl">
                                💰 Possible Prices in Dhaka
                            </h2>

                            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
                                {Object.entries(
                                    possible_price_in_dhaka || {}
                                ).map(([place, amount]) => (
                                    <div
                                        key={place}
                                        className="rounded-xl border border-base-300 p-5"
                                    >
                                        <div className="mb-3 text-3xl">
                                            {place === "home_cooked"
                                                ? "🏠"
                                                : place ===
                                                    "street_food_or_small_restaurant"
                                                    ? "🍜"
                                                    : "☕"}
                                        </div>

                                        <h3 className="font-semibold capitalize">
                                            {place.replaceAll("_", " ")}
                                        </h3>

                                        <p className="mt-3 text-xl font-bold text-primary">
                                            {amount}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </section>

                    {/* Cooking Instructions */}
                    <section className="card bg-base-100 shadow-md">
                        <div className="card-body">
                            <h2 className="card-title mb-5 text-2xl">
                                👨‍🍳 Cooking Instructions
                            </h2>

                            <ul className="steps steps-vertical items-start">
                                {cooking_steps?.map((step, index) => (
                                    <li
                                        key={index}
                                        className="step step-primary w-full text-left"
                                    >
                                        <div className="pb-6">
                                            <h3 className="mb-2 font-bold">
                                                Step {index + 1}
                                            </h3>

                                            <p className="leading-7 text-base-content/70">
                                                {step}
                                            </p>
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    {/* Back Button */}
                    <div className="text-center">
                        <a href="/foods" className="btn btn-primary">
                            ← Back to Foods
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default FoodDetailsPage;