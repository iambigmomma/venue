import React from 'react';
import Fade from 'react-reveal/Fade';

const Footer = () => {
    return (
        <footer className="bck_purple">
            <Fade delay={500}>
                <div className="footer_logo_venue font_righteous">Hat in Munich</div>
                <div className="footer_copyright"> Hat in Munich. 2018 All Rights Reserved</div>
            </Fade>
            
        </footer>
    );
};

export default Footer;