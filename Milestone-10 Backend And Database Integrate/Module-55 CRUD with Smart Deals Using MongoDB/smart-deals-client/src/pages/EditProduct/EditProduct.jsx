import { useQuery } from '@tanstack/react-query';
import { use, useEffect, useState } from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { FiArrowLeft } from 'react-icons/fi';
import { Link, useNavigate, useParams } from 'react-router';
import { toast } from 'react-toastify';
import api from '../../api/axios';
import { uploadImage } from '../../api/imgBB';
import EditProductSkeleton from '../../components/Skeleton/EditProductSkeleton/EditProductSkeleton';
import { useUpdateProduct } from '../../hooks/useUpdateProduct';
import { AuthContext } from './../../contexts/AuthContext/AuthContext';

const EditProduct = () => {

    const { id: productId } = useParams();
    const navigate = useNavigate();
    const { user } = use(AuthContext);


    //single product data
    const { data: product = [], isLoading, isError, error: productError } = useQuery({
        queryKey: ["product", productId],
        queryFn: async () => {
            const response = await api.get(`/products/${productId}`);
            return response.data;
        },
        staleTime: Infinity,
        gcTime: Infinity,
        enabled: !!productId
    });

    const [error, setError] = useState("");


    const { register, handleSubmit, reset, getValues, control, formState: { errors } } = useForm({
        mode: "onChange",
        defaultValues: {
            condition: "new",
            seller_name: user?.displayName,
            seller_email: user?.email
        },
    });

    const condition = useWatch({
        control,
        name: "condition"
    });

    useEffect(() => {
        if (product?._id) {
            reset({
                title: product.title || "",

                // IMPORTANT:
                // use the database slug, not category label
                category: product.category || "",

                price_min: product.price_min ?? "",
                price_max: product.price_max ?? "",

                condition: product.condition || "new",

                usage: product.usage || "",

                seller_name: product.seller_name || "",

                seller_email: product.seller_email || "",

                seller_contact: product.seller_contact || "",

                location: product.location || "",

                description: product.description || "",
            });
        }
    }, [product, reset]);

    const { mutateAsync, isPending } = useUpdateProduct();


    const onSubmit = async (data) => {
        try {
            setError("");
            const {
                price_min,
                price_max,
                product_image,
                seller_image,
                seller_contact,
            } = data;

            // -------------------------
            // Convert prices to numbers
            // -------------------------
            const price_min_value = Number(price_min);

            const price_max_value = price_max
                ? Number(price_max)
                : price_min_value;

            // -------------------------
            // Format phone number
            // -------------------------
            const formattedContact = seller_contact.startsWith("0")
                ? seller_contact
                : `0${seller_contact}`;

            // -------------------------
            // Product image
            // -------------------------
            let product_image_url = product.product_image;

            if (product_image?.[0]) {
                product_image_url = await uploadImage(product_image[0]);
            }

            // -------------------------
            // Seller image
            // -------------------------
            let seller_image_url = product.seller_image;

            if (seller_image?.[0]) {
                seller_image_url = await uploadImage(seller_image[0]);
            }

            // -------------------------
            // Final product data
            // -------------------------
            const productData = {
                title: data.title,
                category: data.category,

                price_min: price_min_value,
                price_max: price_max_value,

                condition: data.condition,
                usage: data.usage,

                seller_name: data.seller_name,
                seller_email: data.seller_email,
                seller_contact: formattedContact,

                location: data.location,
                description: data.description,

                product_image: product_image_url,
                seller_image: seller_image_url,
            };

            // -------------------------
            //     Update product
            // -------------------------
            await mutateAsync({
                productId,
                productData,
            });

            toast.success("Product updated successfully!");
            reset("");
            navigate("/myProducts");
        } catch (error) {
            console.error(error);

            toast.error(
                error?.response?.data?.message ||
                "Failed to update product!"
            );
        }
    }

    return (
        <div className="py-6 md:py-10 lg:py-14 bg-[#F5F5F5]">
            <title>Smart Deals: Edit Product</title>
            <div className="max-w-200 mx-auto px-2">
                <div className="flex items-center justify-center mb-4">
                    <Link to="/allProducts" className="flex items-center gap-2 text-slate-700 hover:text-purple-600 transition-colors font-medium text-sm w-fit cursor-pointer">
                        <FiArrowLeft className="w-4 h-4" />
                        <span>Back To Products</span>
                    </Link>
                </div>
                <div>
                    <h3 className="text-xl md:text-2xl lg:text-4xl text-center font-bold mb-6">Create <span className="text-gradient">A Product</span></h3>
                </div>

                {
                    isError
                    &&
                    <p className="text-center mt-5 text-red-500">
                        {productError.message}
                    </p>
                }
                <div>

                </div>
                {
                    isLoading
                    &&
                    <EditProductSkeleton></EditProductSkeleton>
                }

                <form onSubmit={handleSubmit(onSubmit)} className="w-full bg-white rounded-lg shadow p-6 space-y-6">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        {/* Product Name */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Title</span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Yamaha Fz Guitar for Sale"
                                {...register("title", {
                                    required: "Please enter your product title",
                                })}
                                className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 capitalize ${errors.title ?
                                    "input-error"
                                    :
                                    ""
                                    }`
                                }
                            />
                            {
                                errors.title && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.title.message}
                                    </span>
                                )
                            }
                        </div>

                        {/* Product Category */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Category</span>
                            </label>
                            <select
                                {...register("category", {
                                    required: "Please select a category"
                                })}
                                className="select select-bordered w-full focus:outline-none focus:border-[#9F62F2] outline-0"
                            >
                                <option value="">Select a Category</option>
                                <option value="electronics">Electronics</option>
                                <option value="fashion">Fashion</option>
                                <option value="home-living">Home & Living</option>
                                <option value="beauty-personal-care">
                                    Beauty & Personal Care
                                </option>
                                <option value="sports-fitness">Sports & Fitness</option>
                                <option value="books-education">Books & Education</option>
                                <option value="toys-games">Toys & Games</option>
                                <option value="grocery">Grocery</option>
                                <option value="automotive">Automotive</option>
                                <option value="pet-supplies">Pet Supplies</option>
                            </select>

                            {
                                errors.category && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.category.message}
                                    </span>
                                )
                            }
                        </div>
                    </div>


                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        {/* Product min price */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Min Price You want to Sale ($)</span>
                            </label>
                            <input
                                type="number"
                                placeholder="e.g. 18.5"
                                onKeyDown={(e) => {
                                    if (["e", "E", "+", "-"].includes(e.key)) {
                                        e.preventDefault();
                                    }
                                    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                                        e.preventDefault();
                                    }
                                }}
                                {...register("price_min", {
                                    required: "Please enter minimum price",
                                    valueAsNumber: true,
                                    validate: (value) => {
                                        return value > 0 || "Minimum price must be greater than 0"
                                    }
                                })}
                                className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 appearance:textfield]
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    [&::-webkit-outer-spin-button]:appearance-none
                                             ${errors.price_min ?
                                        "input-error"
                                        :
                                        ""
                                    }`
                                }
                            />
                            {
                                errors.price_min && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.price_min.message}
                                    </span>
                                )
                            }
                        </div>

                        {/* Product max price */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Max Price You want to Sale ($)</span>
                            </label>
                            <input
                                type="number"
                                placeholder="Optional (default = Min Price)"
                                onKeyDown={(e) => {
                                    if (["e", "E", "+", "-"].includes(e.key)) {
                                        e.preventDefault();
                                    }
                                    if (e.key === "ArrowUp" || e.key === "ArrowDown") {
                                        e.preventDefault();
                                    }
                                }}
                                {...register("price_max", {
                                    valueAsNumber: true,
                                    validate: (value) => {
                                        // Empty max price is allowed
                                        if (!value) {
                                            return true;
                                        }
                                        const price_min = Number(getValues("price_min"));
                                        const price_max = Number(value);

                                        return (
                                            price_max >= price_min || "Max price must be greater than or equal to min price"
                                        )
                                    }
                                })}
                                className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 appearance:textfield]
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    [&::-webkit-outer-spin-button]:appearance-none
                                             ${errors.price_max ?
                                        "input-error"
                                        :
                                        ""
                                    }`
                                }
                            />
                            {
                                errors.price_max && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.price_max.message}
                                    </span>
                                )
                            }
                        </div>


                    </div>

                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        {/* Product condition */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Product Condition</span>
                            </label>
                            {/* Brand New Option */}
                            <div className="flex items-center gap-8">
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="new"
                                        {...register("condition", {
                                            required: "Please select your product condition"
                                        })}
                                        className="peer appearance-none w-4 h-4 rounded-full bg-white border-[3px] border-slate-200 checked:border-[#6338f6] transition-all cursor-pointer"
                                    />
                                    <span className="peer-checked:text-[#6338f6] text-slate-800 text-sm font-medium">Brand New</span>
                                </label>

                                {/* Used Option */}
                                <label className="flex items-center gap-3 cursor-pointer">
                                    <input
                                        type="radio"
                                        value="used"
                                        {...register("condition")}
                                        className="peer appearance-none w-4 h-4 rounded-full bg-white border-[3px] border-slate-200 checked:border-[#6338f6] transition-all cursor-pointer"
                                    />
                                    <span className="peer-checked:text-[#6338f6] text-slate-800 text-sm font-medium">Used</span>
                                </label>
                            </div>
                            {
                                errors.condition && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.condition.message}
                                    </span>
                                )
                            }
                        </div>


                        {/* Product usage time */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Product Usage time</span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. 1 year 3 months"
                                disabled={condition !== "used"}
                                {...register("usage", {
                                    required:
                                        condition === "used"
                                            ?
                                            "Please enter your product usage time"
                                            : false,
                                })}
                                className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 capitalize placeholder:lowercase ${errors.usage ? "input-error" : ""} ${condition !== "used" ? "bg-slate-100 cursor-not-allowed" : ""}`
                                }
                            />
                            {
                                errors.usage && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.usage.message}
                                    </span>
                                )
                            }
                        </div>
                    </div>

                    {/* Product Image */}
                    <div className="form-control w-full">
                        <label className="label pb-1">
                            <span className="label-text font-medium text-slate-700">Your Product Image</span>
                        </label>
                        <input
                            type="file"
                            accept=".jpg,.jpeg,.png,.webp"
                            {...register("product_image", {
                                validate: {
                                    fileType: (files) => {
                                        const file = files?.[0];

                                        if (!file) return true;

                                        const allowedTypes = [
                                            "image/png",
                                            "image/jpeg",
                                            "image/png",
                                            "image/webp"
                                        ];

                                        return (
                                            allowedTypes.includes(file.type) ||
                                            "Only JPG, PNG, and WEBP images are allowed"
                                        )

                                    }
                                }
                            })}
                            className={`file-input w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400  
                                    ${errors.product_image ?
                                    "file-input-error"
                                    :
                                    ""
                                }`
                            }
                        />

                        <p className="text-xs text-slate-400 mt-1">
                            Choose a product image (.jpg, .jpeg, .png, .webp)
                        </p>

                        {errors.product_image && (
                            <span className="text-error text-xs mt-1">
                                {errors.product_image.message}
                            </span>
                        )}

                        {/* Existing Product Image */}
                        {product.product_image && (
                            <div className="mt-4">
                                <p className="text-sm text-gray-600 mb-2">
                                    Current Product Image
                                </p>

                                <img
                                    src={product.product_image}
                                    alt={product.title}
                                    className="w-20 h-20 object-cover rounded-lg border"
                                />
                            </div>
                        )}

                        <p className="text-xs text-gray-500 mt-2">
                            Leave empty to keep the current image.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                        {/* Seller Name */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Seller Name</span>
                            </label>
                            <input
                                type="text"
                                placeholder="e.g. Artisan Roasters Name"
                                {...register("seller_name")}
                                readOnly={true}
                                className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:normal-case placeholder:text-slate-400 capitalize cursor-not-allowed
                                             ${errors.seller_name ?
                                        "input-error"
                                        :
                                        ""
                                    }`
                                }
                            />
                            {
                                errors.seller_name && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.seller_name.message}
                                    </span>
                                )
                            }
                        </div>

                        {/* Seller Email */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Seller Email</span>
                            </label>
                            <input
                                type="email"
                                placeholder="leli31955@nrlord.com"
                                readOnly={true}
                                {...register("seller_email")}
                                className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 cursor-not-allowed 
                                             ${errors.seller_email ?
                                        "input-error"
                                        :
                                        ""
                                    }`
                                }
                            />
                            {
                                errors.seller_email && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.seller_email.message}
                                    </span>
                                )
                            }
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row justify-between gap-4">
                        {/* Seller Contact */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Seller Contact</span>
                            </label>
                            <input
                                type="tel"
                                placeholder="e.g. 07123456789"
                                onKeyDown={(e) => {
                                    if (
                                        !/[0-9]/.test(e.key) &&
                                        e.key !== "Backspace" &&
                                        e.key !== "Delete" &&
                                        e.key !== "ArrowLeft" &&
                                        e.key !== "ArrowRight" &&
                                        e.key !== "Tab"
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                                {...register("seller_contact", {
                                    required: "Please enter your contact number",
                                    pattern: {
                                        value: /^0?\d{10}$/,
                                        message: "Contact number must be 10 or 11 digits"
                                    }
                                })}
                                className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 appearance:textfield]
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    [&::-webkit-outer-spin-button]:appearance-none
                                             ${errors.seller_contact ?
                                        "input-error"
                                        :
                                        ""
                                    }`
                                }
                            />
                            {
                                errors.seller_contact && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.seller_contact.message}
                                    </span>
                                )
                            }
                        </div>


                        {/* Seller Image */}
                        <div className="form-control w-full">
                            <label className="label pb-1">
                                <span className="label-text font-medium text-slate-700">Seller Image</span>
                            </label>
                            <input
                                type="file"
                                accept=".jpg,.jpeg,.png,.webp"
                                {...register("seller_image", {
                                    validate: {
                                        fileType: (files) => {
                                            const file = files?.[0];

                                            if (!file) return true;

                                            const allowedTypes = [
                                                "image/png",
                                                "image/jpeg",
                                                "image/png",
                                                "image/webp"
                                            ];

                                            return (
                                                allowedTypes.includes(file.type) ||
                                                "Only JPG, PNG, and WEBP images are allowed"
                                            )

                                        }
                                    }
                                })}
                                className={`file-input w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400  
                                    ${errors.seller_image ?
                                        "file-input-error"
                                        :
                                        ""
                                    }`
                                }
                            />

                            <p className="text-xs text-slate-400 mt-1">
                                Choose a profile image (.jpg, .jpeg, .png, .webp)
                            </p>

                            {errors.seller_image && (
                                <span className="text-error text-xs mt-1">
                                    {errors.seller_image.message}
                                </span>
                            )}

                            {/* Existing Seller Image */}
                            {product.seller_image && (
                                <div className="mt-4">
                                    <p className="text-sm text-gray-600 mb-2">
                                        Current Seller Image
                                    </p>

                                    <img
                                        src={product.seller_image}
                                        alt={product.seller_name}
                                        className="w-16 h-16 object-cover rounded-full border"
                                    />
                                </div>
                            )}

                            <p className="text-xs text-gray-500 mt-2">
                                Leave empty to keep the current image.
                            </p>
                        </div>
                    </div>

                    {/* Location */}
                    <div className="form-control w-full">
                        <label className="label pb-1">
                            <span className="label-text font-medium text-slate-700">Location</span>
                        </label>
                        <input
                            type="text"
                            placeholder="City, Country"
                            {...register("location", {
                                required: "Your location is required",
                            })}
                            className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:normal-case placeholder:text-slate-400 capitalize
                                             ${errors.location ?
                                    "input-error"
                                    :
                                    ""
                                }`
                            }
                        />
                        {
                            errors.location && (
                                <span className="text-error text-xs mt-1">
                                    {errors.location.message}
                                </span>
                            )
                        }
                    </div>

                    {/* Description */}
                    <div className="form-control w-full">
                        <label className="label pb-1">
                            <span className="label-text text-xs md:text-base font-medium text-slate-700">Simple Description About Your Product</span>
                        </label>
                        <textarea
                            placeholder="e.g. I bought this product 3 month ago. did not used more than 1/2 time. actually learning guitar is so tough....."
                            {...register("description", {
                                required: "Your product description is required",
                                validate: (value) => {
                                    const wordCount = value.trim().split(/\s+/).length;

                                    if (wordCount < 10) {
                                        return "Description must contain at least 10 words";
                                    }

                                    if (wordCount > 64) {
                                        return "Description cannot contain more than 64 words";
                                    }

                                    return true;
                                }
                            })}
                            rows={5}
                            className={`textarea textarea-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 resize-none ${errors.description ? "textarea-error" : ""}`}
                        />
                        {
                            errors.description && (
                                <span className="text-error text-xs mt-1">
                                    {errors.description.message}
                                </span>
                            )
                        }
                    </div>

                    <div>
                        {
                            error && (
                                <span className="text-error text-xs mt-1">
                                    {error}
                                </span>
                            )
                        }
                    </div>

                    <button type="submit" disabled={isPending} className="btn border-0 rounded-md px-3 md:px-5 py-2 font-medium text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] w-full">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditProduct;