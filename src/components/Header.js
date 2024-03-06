import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom";
import { productSearch } from "../redux/productAction";
const Header = () => {
  
  const result = useSelector((state) => state.catToData);
  const result2 = useSelector((state) => state.wishListData);
  const dispatch = useDispatch();
  const location = useLocation();

  console.log("redux data in header", result);
  console.log(
    "🚀 ~ Header ~ result?.map((e) => e?.quantity)?.reduce((a, b) => a + b, 0):",
    result?.map((e) => e?.quantity)?.reduce((a, b) => a + b, 0)
  );
  return (
    <div className="header">
      <Link to="/">
        <h1 className="logo">E-commerce</h1>
      </Link>
      {location.pathname !== "/cart" && location.pathname !== "/wishList" && (
        <>
          <div className="search-box">
            <input
              type="text"
              onChange={(e) => dispatch(productSearch(e.target.value))}
              placeholder="Seacrh Product..."
            />
          </div>

          <Link to="/cart">
            <div className="cart-div">
              <span>
                {/* {result?.length} */}
                {result?.map((e) => e?.quantity)?.reduce((a, b) => a + b, 0)}
              </span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/263/263142.png"
                alt=""
              />
            </div>
          </Link>
          <Link to="/wishList">
            <div className="wishList-div">
              <span>{result2.length}</span>
              <img
                src="https://cdn-icons-png.flaticon.com/512/4379/4379561.png"
                alt=""
              />
            </div>
          </Link>
        </>
      )}
    </div>
  );
};
export default Header;
