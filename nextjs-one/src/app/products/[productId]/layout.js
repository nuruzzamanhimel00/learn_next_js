function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
  
export default function ProductLayout({ children }) {
    if(getRandomInt(2) == 1){
            throw new Error("Something went wrong");
        }
    return <section>
        <p>Home / Product</p>
        <div>
        {children}
        </div>
    </section>
  }