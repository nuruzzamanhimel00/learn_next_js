import React from "react";

export default function ProductReview({params}){ 

    return (
        <>
            <h1>Product Review</h1> 
            <p>Product Details: {params.productId} Review Details:- {params.reviewId}</p>
        </>
    )
}