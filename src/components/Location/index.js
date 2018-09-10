import React from 'react';

const Location = () => {
    return (
        <div className="location_wrapper">
            <iframe 
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d10642.10773073131!2d11.5562963!3d48.1771981!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa5353cc93ef3e778!2z5a-26aas5LiW55WM!5e0!3m2!1szh-TW!2sde!4v1536265785219" 
            width="100%" 
            height="500px" 
            frameBorder="0" 
            allowFullScreen>
            </iframe>

            <div className="location_tag">
               <div>Location</div>
            </div>

        </div>
        
    );
};

export default Location;