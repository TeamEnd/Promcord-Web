import React from 'react';

const Footer = () => {
    return (
        <div>
            <div className="footer">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-desc">
                            <h4 className="footer-topic">
                                Promcord
                            </h4>
                            대표: ! Tim23#9999<br />
                            Copyright 2021 SSKATE &amp; Tim23, All rights reserved.
                        </div>
                        <div className="footer-desc">
                            <span className="footer-box">
                                <i alt="discord" className="fab fa-discord" height="20px" />
                                <a href="https://discord.gg/2tbXMMF" className="footer-link">
                                    Promcord 공식 디스코드
                                </a>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;