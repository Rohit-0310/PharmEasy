import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { CartContext } from './Context/CartContext';
import "./NavPay.css"


const NavPay = () => {

  const navigate = useNavigate()
  const { mycart, setmyCart } = useContext(CartContext);

  const navigateHCR = useNavigate()

  const hendleHealtcareProduct =() => {
    navigateHCR(`/HealtcareProduct`)
  }
  
  const handlCart = () =>{
    navigate("/Cart")
  }

//   const handlLogin = () =>{
//     navigate("/Login")
//   }

  const handlSignup = () =>{
    navigate("/Signup")
  }
  
  const handlMain = (id)=>{
    navigate(`/`)
  }


  return (
    <div className="top_navPay">
        <div>
            <div className="navPay_1">
                <div className="navPay_1_1" onClick={()=>handlMain()} href="/"><img src="https://assets.pharmeasy.in/web-assets/dist/fca22bc9.png" alt="logo" /></div>

                <div className="navPay_2">
                    <div className="navPay_2_2_search">
                        <div className="navPay_search_box">

                            
                            <div className="navPay_Pin">
                                <div tabindex="0" role="button" className="navPay_pin_box">
                                    <div className="nav_search_pin">
                                            <input aria-invalid="false" className="nav_search_input_pin" placeholder="Delevery to&nbsp;" type="text"/>
                                    </div>


                                    
                                    <div className="navPay_pin_Empty"></div>
                                </div>
                            </div>


                            <div tabindex="0" role="button" className="Nav_search" aria-label="Search">
                                <div className="Nav_search_1">
                                    <div className="Nav_search_1_1">
                                        <div className="nav_search_2">
                                            <input aria-invalid="false" className="nav_search_input" placeholder="Search medicines/Healthcare products @18% Off" type="text"/>
                                        </div>
                                        <div className="Nav_search_1_2" tabindex="0" role="button" aria-label="Search"> 
                                            <svg viewBox="0 0 24 24" width="25">
                                                <path fill="currentColor" fill-rule="evenodd" d="M15.866 14.32h-.817l-.284-.282a6.658 6.658 0 0 0 1.613-4.349 6.689 6.689 0 1 0-6.689 6.69 6.66 6.66 0 0 0 4.348-1.612l.284.282v.815L19.465 21l1.534-1.534-5.133-5.146zm-6.177 0a4.63 4.63 0 1 1 0-9.262 4.63 4.63 0 0 1 0 9.262z"></path>
                                            </svg>
                                        </div>


                                    </div>
                                </div>
                            </div>
                        </div>

                        
                        <div className="navPay_search_gap"></div>
                    </div>



                    <div className="navPay_2_2_text">
                        <div className="navPay_2_Heading">
                            <div className="navPay_2_head_left">
                                <div> <a href="/"className="navPay_order" >Order Medicines</a></div>
                                <div href="https://pharmeasy-five.vercel.app/HealtcareProduct"className="navPay_order" onClick={()=>hendleHealtcareProduct()}>Healthcare Products</div>
                                <div><a href="/"className="navPay_order" >Lab Test</a></div>
                                <div><a href="/"className="navPay_order" >RTPCR</a></div>
                            </div>
                            <div className="navPay_2_head_right">
                                <div href="/" className="navPay_Offer">
                                    <img className="navPay_img" src="https://assets.pharmeasy.in/web-assets/dist/275c07e1.svg" alt="/" />
                                    <span>Offers</span>
                                </div>

                                <div className="navPay_login" onClick={()=>handlSignup()}>
                                    <img className="navPay_login_img" src="https://assets.pharmeasy.in/web-assets/dist/5eb42971.svg" alt="/" />
                                    <span>Login&nbsp;/&nbsp;Signup</span>
                                </div>


                                <div href="https://pharmeasy-five.vercel.app/Cart" className="navPay_Offer" onClick={()=>handlCart()}>
                                <div className="nav_cart_update">{mycart.length}</div>
                                    <img className="navPay_img" src="https://assets.pharmeasy.in/web-assets/dist/21b0b5ba.svg" alt="/" />
                                    <span>Cart</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NavPay

