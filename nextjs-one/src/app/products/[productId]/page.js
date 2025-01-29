import React from "react";

export default function ProductDetails({params}){ 
    return (
        <>
            <h1>Product Details </h1>
            <p>lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quod.: {params.productId} </p>
        </>
    )
}