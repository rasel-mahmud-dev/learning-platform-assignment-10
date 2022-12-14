import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import calcDiscountPrice from "../../utils/calcDiscountPrice";
import Button from "../../components/Button/Button";
import { BiLock } from "react-icons/bi";
import toast, { Toaster } from "react-hot-toast";

const Checkout = () => {
    const courseDetail = useLoaderData();

    const discountPrice = calcDiscountPrice(courseDetail?.price, courseDetail?.discount);

    function checkoutCompleteHandler() {
     
	    toast.success("Congratulation! You are successfully purchase this course");
    }

    return (
        <div className="container">
	        
	          <Toaster />
	        
            <div className="max-w-4xl mx-auto my-10">
                <h1 className="text-3xl font-bold text-neutral-900 text-center mt-10 mb-10 md:mb-20">Checkout</h1>
                <div className="block md:grid grid-cols-5 gap-x-10">
                    <div className="col-span-3 border dark:border-neutral border-base-300/90  rounded-box p-4 ">
                     
	                    
	                    {/******* payment method ******/}
	                    <div className="flex justify-between items-center">
                            <h1 className="font-bold text-xl">Payment Method</h1>
                            <span className="flex items-center">
                                <BiLock />
                                <span>Secured connection</span>
                            </span>
                        </div>

                        <div className="flex items-center gap-2 mt-6">
                            <input type="radio" name="payment-type" className="flex" />
                            <div className="flex justify-between w-full">
                                <div className="flex w-10">
                                    <img className="border border-gray-400/30 rounded" src="/card-amex.svg" alt="" />
                                    <img className="border border-gray-400/30 rounded" src="/card-visa.svg" alt="" />
                                    <img
                                        className="border border-gray-400/30 rounded"
                                        src="/card-mastercard.svg"
                                        alt=""
                                    />
                                    <img className="border border-gray-400/30 rounded" src="/card-default.svg" alt="" />
                                    <img
                                        className="border border-gray-400/30 rounded"
                                        src="/card-discover-1.svg"
                                        alt=""
                                    />
                                </div>
                                <h4>Credit/Debit Card</h4>
                            </div>
                        </div>
                        <div className="flex items-center gap-2 mt-3">
                            <input name="payment-type" type="radio" />
                            <div className="flex items-center gap-x-2">
                                <img className="border border-gray-400/30 rounded w-12" src="/hpp-paypal.svg" alt="" />
                                <h4>Paypal</h4>
                            </div>
                        </div>
                    </div>

                    {/**** order summary *****/}
                    <div className="bg-primary-10 p-5 rounded-box col-span-2 mt-10 md:mt-0">
                        <h1 className="text-2xl font-semibold">Summary</h1>
                        <div className="flex gap-x-2 my-5">
                            <img src={courseDetail?.thumb} alt="" className="w-12" />
                            <p>{courseDetail?.title}</p>
                        </div>
                        <div className="flex justify-between mt-4">
                            <span className="font-semibold">SubTotal</span>
                            <span className="font-semibold">${courseDetail?.price}</span>
                        </div>
                        <div className="flex justify-between mt-2">
                            <span className="font-semibold">Discount ({courseDetail?.discount}%)</span>
                            <span className="font-semibold">${discountPrice}</span>
                        </div>

                        <div className="border dark:border-gray-50/10 border-gray-400/20 my-4" />

                        <div className="flex justify-between">
                            <span className="font-semibold">Total</span>
                            <span className="font-semibold">${courseDetail?.price - discountPrice}</span>
                        </div>

                        <div className="mt-5">
                            <p className="font-medium text-xs ">
                                By completing your purchase you agree to these{" "}
                                <a href="#" className="text-primary-500">
                                    Terms of Service
                                </a>
                                .
                            </p>
                            <Button className="bg-primary-400 my-2 w-full" onClick={checkoutCompleteHandler}>
                                Checkout Completed
                            </Button>
                            <p className="font-medium text-xs text-center">30-Day Money-Back Guarantee</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;
