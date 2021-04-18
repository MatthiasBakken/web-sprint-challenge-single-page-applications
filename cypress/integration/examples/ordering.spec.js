describe( 'Quotes App', () => {
  beforeEach( () => {
    cy.visit( 'http://localhost:3000' );
  } )
  
  it ( 'sanity checks', () => {
    expect( 10 ).to.equal( 10 );
    expect( 1 + 2 ).to.equal( 3 );
    expect( {} ).to.eql( {} );
    expect( 1 + 2 ).to.equal( 4 - 1 );
  } );

  const homeLink = () => cy.get( `a[href="/"]` );
  const orderLink = () => cy.get( `a[href="/pizza"]` );
  const firstNameInput = () => cy.get( `input[name="firstName"]` );
  const lastNameInput = () => cy.get( `input[name="lastName"]` );
  const emailInput = () => cy.get( `input[name="email"]` );
  const topping1Select = () => cy.get( `select[name="topping1"]` );
  const topping2Select = () => cy.get( `select[name="topping2"]` );
  const topping3Select = () => cy.get( `select[name="topping3"]` );
  const topping4Select = () => cy.get( `select[name="topping4"]` );
  const topping5Select = () => cy.get( `select[name="topping5"]` );
  const topping6Select = () => cy.get( `select[name="topping6"]` );
  const topping7Select = () => cy.get( `select[name="topping7"]` );
  const topping8Select = () => cy.get( `select[name="topping8"]` );
  const specInstInput = () => cy.get( `input[name=specialInstructions]` );
  const termsCheckBox = () => cy.get( `input[name="terms"]` );
  const submitBtn = () => cy.get( `button[type="submit"]` );
  const confirmName = () => cy.get( `p[class="confirmation-name"]` );
  const confirmEmail = () => cy.get( `p[class="confirmation-email"]` );
  const confirmToppings = () => cy.get( `p[class="topping"]` );
  const confirmSpecial = () => cy.get( `p[class="confirmation-spec-instruct"]` );


  it( 'home has links', () => {
    homeLink().should( 'exist' );
    orderLink().should( 'exist' );
  } )
  
  it( 'should navigate to order page & inputs/selects should exist', () => {
    orderLink().click();
    firstNameInput().should( 'exist' );
    lastNameInput().should( 'exist' );
    emailInput().should( 'exist' );
    topping1Select().should( 'exist' );
    topping2Select().should( 'exist' );
    topping3Select().should( 'exist' );
    topping4Select().should( 'exist' );
    topping5Select().should( 'exist' );
    topping6Select().should( 'exist' );
    topping6Select().should( 'exist' );
    topping7Select().should( 'exist' );
    topping8Select().should( 'exist' );
    specInstInput().should( 'exist' );
    termsCheckBox().should( 'exist' );
    submitBtn().should( 'exist' );
  } )
  
  it( 'should navigate to order page & fill order inputs and submit', () => {
    orderLink().click();
    firstNameInput().type( 'Johnny', { delay: 50 } );
    lastNameInput().type( 'Dangerously', { delay: 50 } );
    emailInput().type( 'jd@danger.com', { delay: 50 } );
    topping1Select().select( 'Pepperoni' );
    topping2Select().select( 'Garlic' );
    topping3Select().select( 'Onions' );
    topping4Select().select( 'Olives' );
    topping5Select().select( 'BBQ Chicken' );
    topping6Select().select( 'Goat Cheese' );
    topping6Select().select( 'Jalepenos' );
    topping7Select().select( 'Bell Pepper' );
    topping8Select().select( 'Anchovies' );
    specInstInput().type( 'Baked at 500 degrees upside down on top of a small animal' );
    submitBtn().should( 'be.disabled' );
    termsCheckBox().check();
    submitBtn().should( 'be.enabled' );
    submitBtn().click();
  } );
  
  it( 'should navigate to order page & fill order inputs and submit & display information on confirmation page correctly', () => {
    orderLink().click();
    firstNameInput().type( 'Johnny', { delay: 50 } );
    lastNameInput().type( 'Dangerously', { delay: 50 } );
    emailInput().type( 'jd@danger.com', { delay: 50 } );
    topping1Select().select( 'Pepperoni' );
    topping2Select().select( 'Garlic' );
    topping3Select().select( 'Onions' );
    topping4Select().select( 'Olives' );
    topping5Select().select( 'BBQ Chicken' );
    topping6Select().select( 'Goat Cheese' );
    topping6Select().select( 'Jalepenos' );
    topping7Select().select( 'Bell Pepper' );
    topping8Select().select( 'Anchovies' );
    specInstInput().type( 'Baked at 500 degrees upside down on top of a small animal' );
    submitBtn().should( 'be.disabled' );
    termsCheckBox().check();
    submitBtn().should( 'be.enabled' );
    submitBtn().click();
    confirmName().should( 'exist' );
    confirmEmail().should( 'exist' );
    confirmToppings().should( 'exist' );
    confirmSpecial().should( 'exist' );
    homeLink().click();
  })

} );