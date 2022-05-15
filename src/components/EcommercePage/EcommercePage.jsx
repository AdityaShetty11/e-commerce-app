import React from "react";
import './EcommercePage.css';
import startPayment from '../../resources/svg/start-payment.svg';
import ecommerseCustomize from '../../resources/svg/ecommerce-customize.svg';
import activeCommunity from '../../resources/svg/active-community.svg';

function EcommercePage() {
    return (
        <div className="ecommerce-container">
            <h1 className="ecommerce-title">Your eCommerce made simple</h1>
            <div className="ecommerce-content">
                <figure className="ecommerce-card start-card">
                    <img className="ecommerce-img" src={startPayment}></img>
                    <figcaption>
                        <h2 className="caption-heading">All You Need to Start</h2>
                        <p className="caption-content">Add Commerce plugin to any WordPress site and set up a new store in minutes.</p>
                        <a href="#" className="custom-link">Ecommerce for Wordpress ›</a>
                    </figcaption>
                </figure>

                <figure className="ecommerce-card customize-card">
                    <img className="ecommerce-img" src={ecommerseCustomize}></img>
                    <figcaption>
                        <h2 className="caption-heading">Customize and Extend</h2>
                        <p className="caption-content">From subscriptions to gym classes to luxury cars, Commerce is fully customizable.</p>
                        <a href="#" className="custom-link">Browse Extensions ›</a>
                    </figcaption>
                </figure>

                <figure className="ecommerce-card community-card">
                    <img className="ecommerce-img" src={activeCommunity}></img>
                    <figcaption>
                        <h2 className="caption-heading">Active Community</h2>
                        <p className="caption-content">Commerce is one of the fastest-growing eCommerce communities. </p>
                        <a href="#" className="custom-link">Check our Forums ›</a>
                    </figcaption>
                </figure>
                
            </div>
        </div>
    )
};

export default EcommercePage;