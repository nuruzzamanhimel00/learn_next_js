const Product = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Product");
        }, 4000);
      });
    return (
        <>
        <div className="product">Product</div>
        </>
    )
}

export default Product;