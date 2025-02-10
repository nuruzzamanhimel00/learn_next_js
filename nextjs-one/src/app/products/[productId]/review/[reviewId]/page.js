
import { notFound } from "next/navigation";


function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  

export default async function ProductReview({params}){ 
    // const { productId, reviewId } = params;
    const productId = (await params).productId;
    const reviewId = (await params).reviewId;
    // if(getRandomInt(2) == 1){
    //     throw new Error("Something went wrong");
    // }
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