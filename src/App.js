import { useState } from "react";
import {
  FaSearch,
  FaCartPlus,
  FaArrowLeft,
  FaArrowRight,
} from "react-icons/fa";
import "./index.css";
import bannerImg from "./banner";
import products from "./product";
import "bootstrap/dist/css/bootstrap.min.css";
function App() {
  const jewelery = [
    {
      img: "sliverdragen.jpg",
    },
    {
      img: "goldpetitle.jpg",
    },
    {
      img: "copperbangle.jpg",
    },
    {
      img: "sliverring.jpg",
    },
  ];

  const menFashion = [
    {
      img: "cottenjacket.jpg",
    },
    {
      img: "fullsleve.jpg",
    },
    {
      img: "slim-t-shit.jpg",
    },
  ];

  const computing = [
    {
      img: "gamingdrive.jpg",
    },
    {
      img: "ledtv.jpg",
    },
    {
      img: "ledtv.jpg",
    },
    {
      img: "powerbank.jpg",
    },
  ];
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [item, setItem] = useState([]);
  const [itemClone, setItemClone] = useState([]);

  const [cartList, setCartList] = useState([]);
  return (
    <div className="global-container">
      {isOpen2 && (
        <HandleCartDetails
          setIsOpen2={setIsOpen2}
          cartList={cartList}
          setCartList={setCartList}
        />
      )}

      {isOpen1 && (
        <HandleExtraDetails
          setItem={setItem}
          isOpen1={isOpen1}
          item={item}
          setIsOpen1={setIsOpen1}
          itemClone={itemClone}
          setItemClone={setItemClone}
        />
      )}
      <NavBar isOpen2={isOpen2} cartList={cartList} setIsOpen2={setIsOpen2} />
      <BannerImg bannerImg={bannerImg} />

      <CardContainer
        HandleExtraDetails={HandleExtraDetails}
        setIsOpen1={setIsOpen1}
        isOpen1={isOpen1}
        item={item}
        itemClone={itemClone}
        setItemClone={setItemClone}
        setItem={setItem}
        cartList={cartList}
        setCartList={setCartList}
      />

      <SlideShowJewelryImage jewelery={jewelery} />
      <SlideShowDressImage menFashion={menFashion} />
      <SlideShowComputingImage computing={computing} />

      <FooterBox />
    </div>
  );
}

function SlideShowComputingImage({ computing }) {
  return (
    <div className="mb-5">
      <div className="container ">
        <h1 style={{ fontSize: "56px", fontWeight: "200" }} className="mb-4">
          Men Fashion
        </h1>
      </div>
      <div className="flex-slide ">
        {computing.map((product) => (
          <img src={product.img} alt={product.alt} width={"150px"} />
        ))}
      </div>
    </div>
  );
}

function SlideShowDressImage({ menFashion }) {
  return (
    <div className="mb-5">
      <div className="container ">
        <h1 style={{ fontSize: "56px", fontWeight: "200" }} className="mb-4">
          Men Fashion
        </h1>
      </div>
      <div className="flex-slide ">
        {menFashion.map((product) => (
          <img src={product.img} alt={product.alt} width={"150px"} />
        ))}
      </div>
    </div>
  );
}

function SlideShowJewelryImage({ jewelery }) {
  return (
    <div className="mb-5">
      <div className="container">
        <h1 style={{ fontSize: "56px", fontWeight: "200" }} className="mb-4">
          Jewelery
        </h1>
      </div>
      <div className="flex-slide ">
        {jewelery.map((product) => (
          <img src={product.img} alt={product.alt} width={"150px"} />
        ))}
      </div>
    </div>
  );
}

function NavBar({ isOpen2, setIsOpen2, cartList }) {
  function onClickExtraDetails() {
    setIsOpen2(!isOpen2);
  }

  let totalProduct = 0;

  cartList.map((_, items) => (totalProduct += items === 0 ? 1 : items));

  return (
    <header>
      <div className="first-nav">
        <img src="./logo.png" alt="logo" />
        <span className="sub-nav">
          <p className="light-font mb-0">Hello</p>
          <p className="bold-font mb-0">Select your address</p>
        </span>
      </div>
      <div className="search-bar">
        <input type="text" placeholder="search"></input>
        <button>
          <FaSearch />
        </button>
      </div>

      <div className="second-nav">
        <div className="sub-nav">
          <p className="light-font mb-0">Hello Sign in</p>
          <p className="bold-font mb-0">Accounts & Lists</p>
        </div>
        <div className="sub-nav">
          <p className="light-font mb-0">Return</p>
          <p className="bold-font mb-0">&Order</p>
        </div>
        <div className="cart mb-0">
          <button onClick={() => onClickExtraDetails()}>
            <FaCartPlus />
          </button>
          <p className="mb-0">{totalProduct}</p>
        </div>
      </div>
    </header>
  );
}

function HandleCartDetails({
  setIsOpen2,
  cartList,
  setCartList,
  setTotalProduct,
  totalProduct,
}) {
  let totalPrice = 0;
  cartList.map((product) => (totalPrice += product.price));

  function onRemoveProduct(e) {
    console.log(e.target.id);

    setCartList((items) => items.filter((item) => item.id != e.target.id));
    //setCartList((items) => items.filter((item) => item.id !== id));
  }

  return (
    <>
      <div className="overlay-1" onClick={() => setIsOpen2(false)}></div>
      <div className="cart-list">
        <div className="banner-cart">
          <div className="cart-container">
            <img src="shop.png" alt="shopImg" className="img-cart" />
            <div>
              <p className="mb-2 text-light display-6 fs-4">
                Shop All Items in Your Cart
              </p>
              <p className="display-6 fs-4 mb-3 text-light">
                Total Price = {totalPrice}{" "}
                <span style={{ fontSize: "32px" }}>$</span>
              </p>
              <button className="btn btn-warning ">Buy Now</button>
            </div>
          </div>
        </div>

        <div style={{ paddingTop: "12px" }}>
          <ul
            style={{ paddingLeft: "0px", padding: "12px 24px" }}
            className="lists"
          >
            {cartList.length !== 0 ? (
              cartList.map((product, count) => (
                <li key={product.id} style={{ listStyle: "none" }}>
                  <div className="carted-list">
                    <div
                      style={{
                        display: "flex",
                        columnGap: "24px",
                        flexDirection: "row",
                      }}
                      className="fs-5"
                    >
                      <p className="mb-0 ">{count + 1}</p>
                      <p className="mb-0 ">{product.name}</p>
                      <p className="mb-0 product-price">$ {product.price}</p>
                    </div>
                    <button
                      className="btn bg-danger text-light"
                      id={product.id}
                      onClick={(e) => onRemoveProduct(e)}
                    >
                      X
                    </button>
                  </div>
                </li>
              ))
            ) : (
              <div className="text-center mt-3">
                <NoElementSelected />
              </div>
            )}
          </ul>
        </div>
      </div>
    </>
  );
}

function NoElementSelected() {
  return (
    <div>
      <p className="display-6">Your basket is empty </p>
      <p className="fs-4">Start Add items to your basket </p>
    </div>
  );
}

function CardContainer({
  setIsOpen1,
  isOpen1,
  item,
  setItem,
  itemClone,
  setItemClone,
  cartList,
  setCartList,
}) {
  return (
    <div className="container ">
      <ul className="cards-container">
        {products.map((product) => (
          <li key={product.name}>
            <Cards
              products={products}
              product={product}
              setIsOpen1={setIsOpen1}
              item={item}
              setItem={setItem}
              itemClone={itemClone}
              setItemClone={setItemClone}
              setCartList={setCartList}
              cartList={cartList}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

function HandleExtraDetails({
  isOpen1,
  setIsOpen1,
  setItem,
  item,
  itemClone,
  setItemClone,
}) {
  function closeModel() {
    setIsOpen1(false);

    setItem([]);
  }

  return (
    isOpen1 && (
      <>
        <div className="registered-form">
          <div className="btn-container">
            <button
              className="btn btn-closed fs-4"
              onClick={() => closeModel()}
            >
              X
            </button>
          </div>
          <div className="extraDetails">
            <h2 className="display-6 pb-3">{itemClone.name}</h2>
            <img
              src={itemClone.img}
              alt={itemClone.name}
              className="details-img"
            />
            <p className="pt-4 pb-3">{itemClone.description}</p>
            <div style={{ textAlign: "left" }}>
              <button className="btn btn-warning">Add To Cart</button>
            </div>
          </div>
        </div>
        <div className="overlay"></div>
      </>
    )
  );
}

function Cards({
  product,
  setIsOpen1,
  products,
  item,
  setItem,
  setItemClone,
  setCartList,
  cartList,
}) {
  function handleExtraDetails(e) {
    setIsOpen1(true);
    setItem(item.push(products[e.target.id]));
    setItemClone(item[0]);
  }

  function handleAddToCartList(e) {
    setCartList(() => cartList.concat(products[e.target.id]));
  }

  return (
    <div className="card" style={{ width: "18rem" }}>
      <img
        src={product.img}
        alt={product.name}
        style={{ width: "290px", height: "300px" }}
      />
      <div className="card-body">
        <p
          className="learn-more"
          style={{ cursor: "pointer" }}
          id={product.id}
          onClick={(e) => handleExtraDetails(e)}
        >
          See More &rarr;
        </p>
        <h5 className="card-title">{product.name}</h5>
        <h2>{product.price}</h2>
        <button
          className="btn btn-warning text-light"
          id={product.id}
          onClick={(e) => handleAddToCartList(e)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
}

function BannerImg({ bannerImg }) {
  const [currBanner, setCurrBanner] = useState(0);

  function handlePrevBanner() {
    if (currBanner === -1) {
      setCurrBanner(4);
    }
    setCurrBanner((prev) => prev - 1);
    console.log(currBanner);
  }

  function handleNextBanner() {
    if (currBanner <= 4) {
      setCurrBanner((nxt) => nxt + 1);
    } else {
      setCurrBanner(0);
    }
  }

  return (
    <div className="banner">
      <div className="banner-btn">
        <button>
          <FaArrowLeft onClick={() => handlePrevBanner()} />
        </button>
        <button>
          <FaArrowRight onClick={() => handleNextBanner()} />
        </button>
      </div>

      <img
        src={bannerImg.at(currBanner).img}
        className="banner-img"
        alt="bannerImg"
      />
    </div>
  );
}

function FooterBox() {
  return (
    <footer className="container-fluid footer-container">
      <div className="container p-5">
        <div className="row p-5">
          <div className="col">
            <ul className="list-inline" style={{ color: "#d6d7d8" }}>
              <li className="text-white h5 mb-3">Get to Kow Us</li>
              <li>About Us</li>
              <li>Careers</li>
              <li>Press Releases</li>
              <li>Amazon Science</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-inline" style={{ color: "#d6d7d8" }}>
              <li className="text-white h5 mb-3">Connect with us</li>
              <li>Facebook</li>
              <li>Twiter</li>
              <li>Instagram</li>
            </ul>
          </div>
          <div className="col">
            <ul className="list-inline" style={{ color: "#d6d7d8" }}>
              <li className="text-white h5 mb-3">Make Money with Us</li>
              <li>Sell on Amazon.</li>
              <li>Sell under Amazon Accelerator.</li>
              <li>Protect and Build Your Brand.</li>
              <li>Amazon Global Selling.</li>
              <li>Advertise Your Products.</li>
            </ul>
          </div>
          <div className="col " style={{ paddingLeft: "54px" }}>
            <ul className="list-inline" style={{ color: "#d6d7d8" }}>
              <li className="text-white h5 mb-3">Let Us Help You</li>
              <li>Your Account.</li>
              <li>Return Center.</li>
              <li>100% Purchase Protection.</li>
              <li>Amazon App Download.</li>
            </ul>
          </div>
        </div>
        <div>
          <p className=" pb-5 text-white text-center">
            &copy;2024 Amazon. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
}

export default App;
