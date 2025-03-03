import Product from "@/components/product";
import Review from "@/components/review";
import { Suspense } from 'react'

const productDetails = () => {
    return (
        <>
        <div className="product-details-page">Product Details</div>
        <Suspense fallback={<div>Product loading...</div>}>
            <Product/>
        </Suspense>
        <Suspense fallback={<div>Review loading...</div>}>
            <Review/>
        </Suspense>
        </>

    )
}

export default productDetails;