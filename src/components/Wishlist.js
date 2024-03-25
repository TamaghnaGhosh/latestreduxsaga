import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { quentityAddToCart, wishListRmvFromCart } from "../redux/action";
import Header from "./Header";

const Wishlist = () => {
//   const keyIndex = new Date();
  const dispatch = useDispatch();
  const wishListData = useSelector((state) => state.wishListData);

  return (
    <div>
      <Header />
      <NavLink className="NavLink" to="/">
        Go to Products Link
      </NavLink>
      <h1>Wishlist</h1>
      <div className="cart-page-container">
        <table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Color</td>
              <td>Price</td>
              <td>Category</td>
              <td>Brand</td>
              <td>Button</td>
            </tr>
            {wishListData.map((item, index) => (
              <tr key={item.id}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.category}</td>
                <td>{item.brand}</td>
                <td>
                  <button
                    className=""
                    onClick={() => {
                      dispatch(wishListRmvFromCart(item.id));
                      dispatch(quentityAddToCart(item, "wish"));
                    }}
                  >
                    move to cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Wishlist;
