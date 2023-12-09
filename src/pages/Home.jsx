import React from "react";
import Categories from "../components/Categories";
import Sort from "../components/Sort";
import ProductBlock from "../components/ProductBlock";
import Skeleton from "../components/ProductBlock/Skeleton";

const Home = () => {
  const [products, setProducts] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);

  function getProductsDataFromJson() {
    fetch("https://632796d49a053ff9aaa7c1e6.mockapi.io/react-pizza", {
      method: "GET",
      headers: { "content-type": "application/json" },
    })
      .then((res) => {
        return res.json();
        // handle error
      })
      .then((items) => {
        setProducts(items);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  React.useEffect(() => {
    getProductsDataFromJson();
  }, [products]);
  return (
    <>
      <div className="content__top">
        <Categories />
        <Sort />
      </div>
      <h2 className="content__title">All food</h2>
      <div className="content__items">
        {isLoading
          ? [...new Array(8)].map((_, i) => <Skeleton key={i} />)
          : products.map((product) => (
              <ProductBlock
                key={product.title}
                title={product.title}
                price={product.price}
                image={product.imagePath}
                types={product.types}
                sizes={product.sizes}
              />
            ))}
      </div>
    </>
  );
};

export default Home;
