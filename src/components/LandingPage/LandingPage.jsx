import React from 'react';
import './LandingPage.css';
import productImg from '../../resources/svg/product-img.svg';
import happyFace from '../../resources/svg/happy-face-img.svg';
import paymentImg from '../../resources/svg/payment-img.svg';

function LandingPage() {
    return (
        <div className='landing-page-container'>
            <div className='text-section'>
                <p className='heading-text'>Lorem ipsum is placeholder text for previewing</p>
                <p className='sub-text'>Commerce is a customizable, open-source eCommerce platform built on WordPress.
                    Get started quickly and make your way.</p>
                <div>
                    <button className='primary-btn'>Start a New Store</button>
                  <span> or </span>  <a href='#' className='custom-link customize-link'> Customize &#38; Extend &#62;</a>
                </div>
            </div>

            <div className='image-section'>
               <div className='photo-container'>
                   {/* <div> */}
                       <img className='happy-face-img' src={happyFace}/>
                   {/* </div> */}
                   <div className='polka-pattern-1'></div>
               </div>
               <div className='product-container'>
                   <div className='polka-pattern-2'></div>
                   {/* <div> */}
                       <img className='product-img' src={productImg}/>
                   {/* </div> */}
               </div>
               <div className='payment-container'>
                   {/* <div> */}
                       <img className='payment-img' src={paymentImg}/>
                   {/* </div> */}
                   <div className='polka-pattern-3'></div>
               </div>
            </div>
        </div>
    )
};

export default LandingPage;