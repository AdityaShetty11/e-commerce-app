import React from "react";
import developmentImg from '../../resources/development-img.svg';
import knowCommunity from '../../resources/knowledge.svg';
import './DocumentationPage.css';

function DocumentationPage() {
    return (
        <div className="document-page-container" data-attr="WOO">
            <div class="wrapper" >
                <div className="development-section">
                    <div className="img-section">
                        <img className="development-img" src={developmentImg} />
                    </div>
                    <div className="text-section">
                        <h3 className="develpment-heading">Develop Without Limits</h3>
                        <p className="development-content">Commerce is developer friendly, too. Built with a REST API, Commerce is scalable and can integrate with virtually any service. Design a complex store from scratch, extend a store for a client, or simply add a single product to a WordPress site—your store, your way.</p>
                        <button className="secondary-btn">Read the  Documentation</button>
                    </div>
                </div>
                <div className="knowledge-section">
                    <div className="knowledge-text">
                    <h3 className="develpment-heading">Know our Global Community</h3>
                        <p className="development-content">Commerce is one of the fastest-growing eCommerce communities. We’re proud that the helpfulness of the community and a wealth of online resources are frequently cited as reasons our users love it. There are 80+ meetups worldwide!</p>
                        <button className="secondary-btn">Read the  Documentation</button>
                    </div>
                    <div className="img-section">
                        <img className="knowledge-img" src={knowCommunity}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default DocumentationPage;