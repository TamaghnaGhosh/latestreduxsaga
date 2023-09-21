/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { quentityRemoveFromCart, quentityAddToCart } from "../redux/action";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import Header from "./Header";

const Cart = () => {
  const [checkBtn, setcheckBtn] = useState(false);
  const keyIndex = new Date();
  const dispatch = useDispatch();
  let catToData = useSelector((state) => state.catToData);

  // .......calculation.......

  const itemOfArray = [];
  var updatedObj = {};

  let amount =
    catToData.length &&
    catToData.map((item) => {
      itemOfArray.push(item);
      if (item.quantity === undefined) {
        item.quantity = 1;
        return item.price * item.quantity;
      } else {
        return item.price * item.quantity;
      }
    });

  let TotalAmount = catToData.length && amount.reduce((a, b) => a + b);

  let TotalAmountOfCost = TotalAmount - TotalAmount / 10;

  // itemOfArray.forEach((element) => {
  //   updatedObj = { name: element.name, quantity: element.quantity };
  // });

  // for (let i = 0; i < itemOfArray.length; i++) {
  //   const element = itemOfArray[i];
  //   setdataObj(element);
  // }

  // console.log(updatedObj);

  const handleCheckOut = () => {
    const TotalAmountItem = TotalAmountOfCost;

    // console.log(`$${TotalAmountItem}`);
    if (TotalAmountItem !== 0) {
      setcheckBtn(true);
      fetch("http://localhost:5000/create-checkout-session", {
        // mode: "no-cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ item: TotalAmountItem }),
      })
        .then((res) => {
          if (res.ok) {
            return res.json();
          }
          const json = res.json();
          return Promise.reject(json);
        })
        .then(({ url }) => {
          window.location = url;
        })
        .catch((e) => {
          setcheckBtn(false);
          console.error(e.error);
        });
    } else {
      alert("Please give some data");
    }
  };

  return (
    <div>
      <Header />
      <NavLink className="NavLink" to="/">
        Go to Products Link
      </NavLink>

      <h1>Cart Page</h1>

      <div className="cart-page-container">
        <table>
          <tbody>
            <tr>
              <td>Id</td>
              <td>Name</td>
              <td>Color</td>
              <td>Price</td>
              <td>Brand</td>
              <td>Category</td>
              <td>Quantity</td>
            </tr>
            {catToData.map((item, index) => (
              <tr key={index + 1}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.price}</td>
                <td>{item.brand}</td>
                <td>{item.category}</td>
                <td>
                  <button onClick={() => dispatch(quentityAddToCart(item))}>
                    Quantity
                  </button>

                  <br></br>
                  {item.quantity}
                  <br></br>

                  <button
                    onClick={() => dispatch(quentityRemoveFromCart(item))}
                  >
                    Remove Quantity
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* ...............costing account......... */}

        <div className="price-details">
          <div className="adjust-price">
            <span>Amount</span>
            <span>{TotalAmount}</span>
          </div>
          <div className="adjust-price">
            <span>Discount</span>
            <span>{TotalAmount / 10}</span>
          </div>
          <div className="adjust-price">
            <span>Tax</span>
            <span>{`${TotalAmount * 0.075}`}</span>
          </div>
          <div className="adjust-price">
            <span>Total</span>
            <span>{TotalAmount - TotalAmount / 10}</span>
          </div>
          <button onClick={() => handleCheckOut()}>
            {!checkBtn ? "Checkout" : "please wait...."}
          </button>
        </div>
      </div>
      {`Copyright © ${new Date().getFullYear()}`}
    </div>
  );
};

export default Cart;
