import React from 'react';


const Confirmation = () => {

  const getParameterByName = ( url = window.location.href ) => {

    const urlStr = url.replace( /[2%{}]/g, "" );
    const urlArray = urlStr.split( '?' )[ 1 ].split( ',' );
    const firstName = urlArray[ 0 ].split( ':' )[ 1 ];
    const lastName = urlArray[ 1 ].split( ':' )[ 1 ];
    const email = urlArray[ 2 ].split( ':' )[ 1 ];
    let toppings = [];

    urlArray.forEach( item => {
      if ( item.slice( 0, 2 ) === "to" ) {
  
        toppings.push( item.split( ':' )[ 1 ].replace( /[0]/g, " " ) );
      }
    } );

    let specialInstructions = '';

    urlArray.forEach( item => {
      if ( item.slice( 0, 2 ) === "sp" ) {
        specialInstructions = item.split( ':' )[ 1 ].replace( /[0]/g, " " );
      }
      return;
    } );

    return (
      <div className="confirmation">
        <p className="confirmation-name">Name: {firstName + " " + lastName}</p>
        <p className="confirmation-email">Email: {email}</p>
        <label >Toppings:</label>
        <div className="toppings-container">
          {
            toppings.map( topping => {
              return (
                <p key={topping} className="topping" >{topping}</p>
              );
            } )
          }
        </div>
        <p className="confirmation-spec-instruct">Special Instructions: {specialInstructions}</p>
      </div>
    );
  };

  return (
    <div className="confirmation-container">
      {
        getParameterByName()
      }
    </div>
  );
};

export default Confirmation;