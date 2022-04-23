import { Button, Stack } from "@mui/material";
import React, { useContext, useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useNavigate } from "react-router-dom";
import NavBar from "./NavBar";
import FlashOnIcon from '@mui/icons-material/FlashOn';
import Rating from '@mui/material/Rating';
import { CartContext } from "./Context/CartContext";




const ProductDetails = () => {


    const [price, setPrice] = useState(0);

    const { mycart, setmyCart } = useContext(CartContext);




  const navigate = useNavigate()
    const [disonepro, setDisonepro] = useState([])
    const onepro = useParams()
    useEffect(() => {
      const itemData = async () => {
        let result = await fetch(
          `https://mydbpharma.herokuapp.com/Products/${onepro.id}`
        );
        let res = await result.json();
        setDisonepro(res)
      };
      itemData();
    }, []);
  
  
    console.log(disonepro);

    const handleProduct = (id)=>{
      navigate(`/Products/${id}`)
    }
  
    const handleHome = () =>{
        navigate(`/`)
    }
    let star = disonepro.star;
    const rating = disonepro.rating;
    // console.log(star);



    const handleAddCart = (itemid) => {
        // let res = disonepro.find((item) => {
        //   return item.id === itemid;
        // });

        // console.log(disonepro)
        // console.log(itemid)
    
        fetch(`https://mydbpharma.herokuapp.com/cart`, {
          method: "POST",
          body: JSON.stringify(itemid),
          headers: {
            "content-type": "application/json",
          },
        }).then(() => {
          getMore();
        });
        // console.log(itemid);
      };
    

      async function getMore() {
        let cdata = await fetch("https://mydbpharma.herokuapp.com/cart");
        let res = await cdata.json();
        console.log(res);
    
        let totalprice = 0;
        res.map((e) => (totalprice = e.dis_price + totalprice));
        setPrice(totalprice);
    
        setmyCart(res);
      }
    
    







  
    return (
      <div>
        <NavBar />
        <div className="i_product_main">{
            <div>
                <p style={{fontSize:"13px"}} >
                    <Button 
                    // onClick={()=>handleHome()}
                    >Home</Button>  
                    - 
                    <Button
                     onClick={()=>handleProduct(disonepro.categoryId)}
                     >{disonepro.brand} -</Button>
                    {disonepro.title}
                    </p>
                <div className="i_product_box">
                  <div className="i_product_img">
                      <img  src={disonepro.img} alt={disonepro.title} />
                  </div>
                  <div className="i_product_title">
                      <h3>{disonepro.title}</h3>
                      <p style={{color:"#10847e"}} >visit <span 
                      onClick={()=>handleProduct(disonepro.categoryId)} 
                      > {disonepro.brand}</span> Store</p>

                    <div className="i_product_rating">
                        
                            <Stack spacing={1}>
                                <Rating name="half-rating-read" defaultValue={3.5} precision={0.5} readOnly />
                            </Stack>
                            <p>({rating} ratings)</p>
                        
                    </div>
                        
                      <div className="i_cart_price">
                            <div className="i_price">
                                  <h4>₹ {disonepro.dis_price}</h4>
                                  <h5 className="i_MRP">MRP <del>{disonepro.price}</del></h5>
                                  <h4 className="i_ProductCard_discount">{disonepro.discount} OFF</h4>
                            </div>
                            <div>
                                <button className="i_add_to_cart" onClick={() => handleAddCart(disonepro)}>Add To Cart</button>
                            </div>
                      </div>
                      <div className="i_product_time">
                        <p>Inclusive of all taxes</p>
                        <p>Delivery by<span>Tomorrow In 6 hours</span> 
                        <FlashOnIcon className="i_pro_flash" />
                        </p>
                      </div>

                      <hr />
                      <h3>Select Available Variant</h3>
                      <h4>Pack Size</h4>
                      {/* <Stack spacing={2} direction="row">
                          <Button color="secondary" variant="outlined">200Ml</Button>
                          <Button color="secondary" variant="outlined">2Kg</Button>
                      </Stack> */}
                  </div>
                  <div className="i_Cart_box">
                      <p>Please add item(s) to proceed</p>
                      <p> Items: {mycart.length} </p>
                      <div>Total Price <h3>  {"₹" + price}</h3></div>

                      <button className="i_view_cart">View Cart</button>
                      <div className="i_view_cart_offer">
                        <h4>Offers</h4>
                        <h4>View All</h4>
                      </div>
                      <h5>Get flat Rs.250 cashback on ICICI Debit & Credit cards</h5>
                      <h5>Get up to Rs.500 cashback via Amazon Pay</h5>
                      <h5>Get 4000 Paytm Cashback Points via Paytm wallet | Postpaid</h5>
                      <h5>Get up to Rs.1000 cashback via PhonePe wallet only.</h5>
                      <h5>Get FLAT ₹80 cashback via Airtel Payments Bank.</h5>
                  </div>
                </div>
            </div>
             
          }
        </div>
      </div>
    
    );

    


  };


  export default ProductDetails;