
const Review = async () => {
    await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve("Review");
        }, 8000);
      });
    return (
        <>
        <div className="Review">Review</div>
        </>
    )
}

export default Review;