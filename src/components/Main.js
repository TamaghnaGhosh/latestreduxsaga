/* eslint-disable no-unused-vars */
import { useEffect } from "react";
import { toast } from "react-toastify";
import {
  addToCart,
  emptyCart,
  // removeFromCart,
  wishListToCart,
  wishListRmvFromCart,
  // quentityAddToCart,
} from "../redux/action";
import { useDispatch } from "react-redux";
import { productList } from "../redux/productAction";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Header from "../components/Header";

function Main() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();
  let data = useSelector((state) => state.productData);
  const result = useSelector((state) => state.catToData);
  const result2 = useSelector((state) => state.wishListData);

  useEffect(() => {
    if (location.search === "?sucees=true") {
      navigate("/", { replace: true });
      toast.success("successfully payment done");
    }
    dispatch(productList());
    // eslint-disable-next-line
  }, []);

  const addToCartData = (item) => {
    dispatch(addToCart(item));
  };

  // const removeCart = (itemID) => {
  //   dispatch(removeFromCart(itemID))
  // }
  
  const goToCart = () => {
    navigate("/cart");
  };

  return (
    <div>
      <Header />
      <div className="marginTop">
        <button data-testid="emptycardID" onClick={() => dispatch(emptyCart())}>
          Empty Cart
        </button>
      </div>
      <div className="product-container">
        {data.map((item, i) => (
          <div key={i} className="product-item">
            <img src={item.photo} alt="" style={{ width: "7.5em" }} />
            <div>Name : {item.name} </div>
            <div>Color : {item.color} </div>
            <div>Price : {item.price} </div>
            <div>Category : {item.category} </div>
            <div>Brand : {item.brand} </div>
            <br></br>
            <div>
              {result2.find((itemtemp) => itemtemp.id === item.id) ? (
                <button
                  className="wishListBtn"
                  onClick={() => dispatch(wishListRmvFromCart(item.id))}
                >
                  <FavoriteIcon fontSize="large" />
                  remove
                </button>
              ) : (
                <button
                  className="wishListBtn"
                  onClick={() => dispatch(wishListToCart(item))}
                >
                  <FavoriteBorderIcon fontSize="large" /> wishlist
                </button>
              )}
            </div>

            {result.find((itemtemp) => itemtemp.id === item.id) ? (
              <button onClick={() => goToCart(item)}>Go To bag</button>
            ) : (
              <button onClick={() => addToCartData(item)}>Add to Cart</button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Main;
