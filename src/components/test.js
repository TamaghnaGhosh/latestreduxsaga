let cartList = [
    {
      id: 1,
      name: "car"
    },
    {
      id: 2,
      name: "bike"
    },
    {
      id: 3,
      name: "cycle"
    },
  ]
  
  const [cartHandle, setCarthandle] = useState(false)
  
  const addToCartData = (item) => {
    setCarthandle(true)
    cartList.push(item)
  }
  
  const removeCart = (item) => {
    setCarthandle(false)
     cartList = cartList.filter((item)=> item.id !== item.id)
  }
  
  {
    cartHandle ? "redButton" : "whiteButtun"
  }
  
  console.log(cartList)