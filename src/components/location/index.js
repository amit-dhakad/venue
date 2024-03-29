import React from 'react';

const Location = () => {
  return (
    <div className="location_wrapper">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1930.8459679150192!2d77.61066397389648!3d12.918250440389217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae14fe66fe2057%3A0xa59f47efc8ad3cf!2sS.L.V+Dosa+Camp!5e0!3m2!1sen!2sin!4v1561292638329!5m2!1sen!2sin"
        width="100%"
        height="500"
        frameBorder="0"
        allowfullscreen
      />

      <div className="location_tag">
        <div> Location </div>
      </div>
    </div>
  );
};

export default Location;
