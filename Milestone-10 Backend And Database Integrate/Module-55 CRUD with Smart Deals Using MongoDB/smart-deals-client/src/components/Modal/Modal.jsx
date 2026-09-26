import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { uploadImage } from '../../api/imgBB';
import { useCreateBid } from '../../hooks/useCreateBid';

const Modal = ({ bidModalRef, user, _id, onBidSuccess }) => {

    const { register, handleSubmit, reset, formState: { errors } } = useForm({
        mode: "onChange", defaultValues: {
            buyer_name: user?.displayName,
            buyer_email: user?.email
        }
    });
    const [error, setError] = useState("");

    const { mutateAsync, isPending } = useCreateBid();


    const onSubmit = async (data) => {
        try {
            setError("")
            const { buyer_name, buyer_email, buyer_image, bid_price, buyer_contact } = data;

            const formattedContact = buyer_contact.startsWith("0")
                ? buyer_contact
                : `0${buyer_contact}`;


            const buyer_image_url = await uploadImage(buyer_image[0]);

            const buyer_info = {
                product_id: _id,
                buyer_image: buyer_image_url,
                buyer_name,
                buyer_contact: formattedContact,
                buyer_email,
                bid_price,
                status: "pending"
            }

            await mutateAsync(buyer_info)
            toast.success("Bid successful!");
            reset();
            onBidSuccess();

        } catch (error) {
            setError(error.message)
        }

    }

    return (
        <div>
            <dialog ref={bidModalRef} className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                    <h3 className="font-bold text-base md:text-lg lg:text-xl text-center">Give Seller Your Offered Price</h3>
                    <div className="my-6">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4 text-left">

                            <div className="flex flex-col lg:flex-row justify-between gap-4">
                                {/* Buyer Name */}
                                <div className="form-control w-full">
                                    <label className="label pb-1">
                                        <span className="label-text font-medium text-slate-700">Buyer Name</span>
                                    </label>
                                    <input
                                        type="text"
                                        placeholder="Your Name"
                                        {...register("buyer_name")}
                                        readOnly={true}
                                        className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 capitalize cursor-not-allowed
                                             ${errors.buyer_name ?
                                                "input-error"
                                                :
                                                ""
                                            }`
                                        }
                                    />
                                    {
                                        errors.buyer_name && (
                                            <span className="text-error text-xs mt-1">
                                                {errors.buyer_name.message}
                                            </span>
                                        )
                                    }
                                </div>

                                {/* Buyer Email */}
                                <div className="form-control w-full">
                                    <label className="label pb-1">
                                        <span className="label-text font-medium text-slate-700">Buyer Email</span>
                                    </label>
                                    <input
                                        type="email"
                                        placeholder="Your Email"
                                        readOnly={true}
                                        {...register("buyer_email")}
                                        className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 cursor-not-allowed 
                                             ${errors.buyer_email ?
                                                "input-error"
                                                :
                                                ""
                                            }`
                                        }
                                    />
                                    {
                                        errors.buyer_email && (
                                            <span className="text-error text-xs mt-1">
                                                {errors.buyer_email.message}
                                            </span>
                                        )
                                    }
                                </div>
                            </div>

                            {/* Buyer Image */}
                            <div className="form-control w-full">
                                <label className="label pb-1">
                                    <span className="label-text font-medium text-slate-700">Buyer Image</span>
                                </label>
                                <input
                                    type="file"
                                    accept=".jpg,.jpeg,.png,.webp"
                                    {...register("buyer_image", {
                                        required: "Your profile image is required",
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
                                    ${errors.buyer_image ?
                                            "file-input-error"
                                            :
                                            ""
                                        }`
                                    }
                                />

                                <p className="text-xs text-slate-400 mt-1">
                                    Choose a profile image (.jpg, .jpeg, .png, .webp)
                                </p>

                                {errors.buyer_image && (
                                    <span className="text-error text-xs mt-1">
                                        {errors.buyer_image.message}
                                    </span>
                                )}
                            </div>

                            {/* Price */}
                            <div className="form-control w-full">
                                <label className="label pb-1">
                                    <span className="label-text font-medium text-slate-700">Place your Price</span>
                                </label>
                                <input
                                    type="number"
                                    placeholder="Pounds"
                                    onKeyDown={(e) => {
                                        if (["e", "E", "+", "-"].includes(e.key)) {
                                            e.preventDefault();
                                        }
                                    }}
                                    {...register("bid_price", {
                                        required: "Please enter your price",
                                        valueAsNumber: true,
                                        validate: (value) => {
                                            return value > 0 || "Price must be greater than 0"
                                        }
                                    })}
                                    className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 appearance:textfield]
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    [&::-webkit-outer-spin-button]:appearance-none
                                             ${errors.bid_price ?
                                            "input-error"
                                            :
                                            ""
                                        }`
                                    }
                                />
                                {
                                    errors.bid_price && (
                                        <span className="text-error text-xs mt-1">
                                            {errors.bid_price.message}
                                        </span>
                                    )
                                }
                            </div>

                            {/* Contact */}
                            <div className="form-control w-full">
                                <label className="label pb-1">
                                    <span className="label-text font-medium text-slate-700">Contact Info</span>
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
                                    {...register("buyer_contact", {
                                        required: "Please enter your contact number",
                                        pattern: {
                                            value: /^0?\d{10}$/,
                                            message: "Contact number must be 10 or 11 digits"
                                        }
                                    })}
                                    className={`input input-bordered w-full focus:outline-none focus:border-[#9F62F2] placeholder:text-slate-400 appearance:textfield]
                                    [&::-webkit-inner-spin-button]:appearance-none
                                    [&::-webkit-outer-spin-button]:appearance-none
                                             ${errors.buyer_contact ?
                                            "input-error"
                                            :
                                            ""
                                        }`
                                    }
                                />
                                {
                                    errors.buyer_contact && (
                                        <span className="text-error text-xs mt-1">
                                            {errors.buyer_contact.message}
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
                            <div className="flex justify-end items-center gap-2">
                                <button type="button" onClick={onBidSuccess} className="btn border-0 rounded-md px-3 md:px-5 py-2 gradient-border">
                                    <span className="bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)] bg-clip-text text-transparent font-medium">Cancel</span>
                                </button>
                                <button disabled={isPending} type="submit" className="btn border-0 rounded-md px-3 md:px-5 py-2 font-medium text-white bg-[linear-gradient(125deg,#632EE3_5.68%,#9F62F2_88.38%)]">
                                    Submit Bid
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </dialog >
        </div >
    );
};

export default Modal;