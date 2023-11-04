import "../components/style.css";
import image from "../image/cart-img-1.png";
import image2 from "../image/cart-img-2.png";
import image3 from "../image/cart-img-3.png";
import orange from "../image/product-1.png";
import onion from "../image/product-2.png";
import meat from "../image/product-3.png";
import cabbage from "../image/product-4.png";
import potato from "../image/product-5.png";
import avacado from "../image/product-6.png";
import carrot from "../image/product-7.png";
import lemon from "../image/product-8.png";
import currency from "../image/payment.png";
import axios from "axios";
import userContext from '../context';
import {useContext, useState} from "react"
import { useNavigate } from "react-router-dom";
import Cart from "./cart";
export default function Product() {
  var head=useContext(userContext)
  const navigate = useNavigate();
  const [modelshow,setModelshow]=useState(false)
  const addtocart=async(name,price,product_id)=>{
    axios.post('http://localhost:3002/api/cart/insertcart',{name:name,price:price,product_id:product_id,quantity:1},{headers:{
      'Content-Type':'application/json',
      'x-auth-token':head.auth
    }}).then(res=>{
      console.log(res.data);
    })

  }
  

  return (
    <>
      <header className="header">
        <a href="#" className="logo">
          {" "}
          <i className="fas fa-shopping-basket"></i> grocery{" "}
        </a>

        <div className="icons">
          <div className="fas fa-bars" id="menu-btn"></div>
          <div onClick={()=>(navigate('/cart'))} className="fas fa-shopping-cart" id="cart-btn"></div>
          <div className="fas fa-user" id="login-btn" onClick={()=>{
            head.auth=null;
            navigate('/')
          }}> Logout</div>
        </div>
      </header> 

      <section className="products" id="products">
        <h1 className="heading">
          {" "}
          our <span>products</span>{" "}
        </h1>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src={orange} alt=""></img>
              <h3>fresh orange</h3>
              <div className="price"> $5 </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              {/* <a href="#" className="btn">
                add to cart
              </a> */}
              <button onClick={()=>(addtocart('Orange',5,701))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={onion} alt=""></img>
              <h3>fresh onion</h3>
              <div className="price"> $10 </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button onClick={()=>(addtocart('Onion',10,702))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={meat} alt=""></img>
              <h3>fresh meat</h3>
              <div className="price"> $110</div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button onClick={()=>(addtocart('Meat',110,703))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={cabbage} alt=""></img>
              <h3>fresh cabbage</h3>
              <div className="price"> $20 </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button onClick={()=>(addtocart('Cabage',20,704))}  className="btn">Add to Cart</button>
            </div>
          </div>
        </div>

        <div className="swiper product-slider">
          <div className="swiper-wrapper">
            <div className="swiper-slide box">
              <img src={potato} alt=""></img>
              <h3>fresh potato</h3>
              <div className="price"> $15 </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button onClick={()=>(addtocart('Potato',15,705))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={avacado} alt=""></img>
              <h3>fresh avocado</h3>
              <div className="price"> $50 </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button onClick={()=>(addtocart('Avacado',50,706))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={carrot} alt=""></img>
              <h3>fresh carrot</h3>
              <div className="price"> $100 </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button onClick={()=>(addtocart('Carrot',100,707))}  className="btn">Add to Cart</button>
            </div>

            <div className="swiper-slide box">
              <img src={lemon} alt=""></img>
              <h3>green lemon</h3>
              <div className="price"> $10 </div>
              <div className="stars">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
              </div>
              <button onClick={()=>(addtocart('Lemon',10,708))}  className="btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </section>

      <section className="footer">
        <div className="box-container">
          <div className="box">
            <h3>
              {" "}
              Grocery <i className="fas fa-shopping-basket"></i>{" "}
            </h3>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam,
              saepe.
            </p>
            <div className="share">
              <a href="#" className="fab fa-facebook-f"></a>
              <a href="#" className="fab fa-twitter"></a>
              <a href="#" className="fab fa-instagram"></a>
              <a href="#" className="fab fa-linkedin"></a>
            </div>
          </div>

          <div className="box" id="box-align">
            <h3>contact info</h3>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-phone"></i> 9787636093{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-phone"></i> 9342049246{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-envelope"></i>ruthra@gmail.com{" "}
            </a>
            <a href="#" className="links">
              {" "}
              <i className="fas fa-map-marker-alt"></i> Coimbatore, india -
              641020{" "}
            </a>
          </div>

          <div className="box">
            <h3>newsletter</h3>
            <p>subscribe for latest updates</p>
            <input
              type="email"
              placeholder="your email"
              className="email"
            ></input>
            <input type="submit" value="subscribe" className="btn"></input>
            <img src={currency} className="payment-img" alt=""></img>
          </div>
        </div>
      </section>
    </>
  );
}
