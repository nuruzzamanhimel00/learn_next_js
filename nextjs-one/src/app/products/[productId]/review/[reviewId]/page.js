import { notFound } from "next/navigation";
import React from "react";

export default async function ProductReview({params}){ 
    // const { productId, reviewId } = params;
    const productId = (await params).productId;
    const reviewId = (await params).reviewId;
    if(reviewId > 100){
        notFound();
    }
    return (
        <>
            <h1>Product Review</h1> 
            <p>Product Details: {productId} Review Details:- {reviewId}</p>
        </>
    )
}