import React from 'react';

import { Formik, Form, Field } from 'formik';
import { v4 as uuidv4 } from 'uuid';
import * as Yup from 'yup';
import axios from 'axios';


const SignupSchema = Yup.object().shape( {
  firstName: Yup.string()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  lastName: Yup.string()
    .min( 2, 'Too Short!' )
    .max( 50, 'Too Long!' )
    .required( 'Required' ),
  email: Yup.string().email( 'Invalid email' ).required( 'Required' ),
  topping1: Yup.string().required( 'Required' ),
  topping2: Yup.string().required( 'Required' ),
  topping3: Yup.string().required( 'Required' ),
  topping4: Yup.string().required( 'Required' ),
  terms: Yup.boolean().required( 'Required' ),
} );


const Order = () => {

  const selector = ( name, value, onChangeHandler, onBlurHandler ) => {
    return (
      <select name={name} value={value} onChange={onChangeHandler} onBlur={onBlurHandler} >
        <option value="" label="Select a topping" />
        <option value="Pepperoni" label="Pepperoni" />
        <option value="Onions" label="Onions" />
        <option value="Garlic" label="Garlic" />
        <option value="Olives" label="Olives" />
        <option value="Goat Cheese" label="Goat Cheese" />
        <option value="Jalepenos" label="Jalepenos" />
        <option value="Bell Pepper" label="Bell Pepper" />
        <option value="Anchovies" label="Anchovies" />
        <option value="Beef" label="Beef" />
        <option value="Chicken" label="chicken" />
        <option value="BBQ Chicken" label="BBQ Chicken" />
      </select>
    )
  }

  return (

    <div className="form-container">
      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          topping1: '',
          topping2: '',
          topping3: '',
          topping4: '',
          specialInstructions: '',
          id: uuidv4(),
          terms: false,
        }}

        validationSchema={SignupSchema}
      
        onSubmit={( values ) => {
          axios.post( `https://reqres.in/api/pizza`, {
            firstName: values.firstName,
            lastName: values.lastName,
            email: values.email,
            topping1: values.topping1,
            topping2: values.topping2,
            topping3: values.topping3,
            topping4: values.topping4,
            topping5: values.topping5,
            topping6: values.topping6,
            topping7: values.topping7,
            topping8: values.topping8,
            specialInstructions: values.specialInstructions,
            id: values.id,
            terms: values.terms
          } ).then( res => {
            // Location.replace( `/confirmation?${res.data}` );
            // window.history.replaceState( res.data, 'confirmation', `/confirmation` );
            const response = JSON.stringify( res.data );
            window.location.replace( `/confirmation?${response}` );
            console.log( res );
          } );
        }}
      >
        {( { errors, touched, isValid, dirty, values, handleBlur, handleChange } ) => (
          <Form className="form">
            <label >First Name: </label>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div className="error-div">{errors.firstName}</div>
            ) : null}
            <label>Last Name: </label>
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div className="error-div">{errors.lastName}</div>
            ) : null}
            <label>Email: </label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? (
              <div className="error-div">{errors.email}</div>
            ) : null}
            <label>Topping One: </label>
            {selector('topping1', values.topping1, handleChange, handleBlur)}
            {errors.topping1 && touched.topping1 ? (
              <div className="error-div">{errors.topping1}</div>
            ) : null}
            <label>Topping Two: </label>
            {selector('topping2', values.topping2, handleChange, handleBlur)}
            {errors.topping2 && touched.topping2 ? (
              <div className="error-div">{errors.topping2}</div>
            ) : null}
            <label>Topping Three: </label>
            {selector('topping3', values.topping3, handleChange, handleBlur)}
            {errors.topping3 && touched.topping3 ? (
              <div className="error-div">{errors.topping3}</div>
            ) : null}
            <label>Topping Four: </label>
            {selector('topping4', values.topping4, handleChange, handleBlur)}
            {errors.topping4 && touched.topping4 ? (
              <div className="error-div">{errors.topping4}</div>
            ) : null}
            <label>Topping Five: </label>
            {selector('topping5', values.topping5, handleChange, handleBlur)}
            {errors.topping5 && touched.topping5 ? (
              <div className="error-div">{errors.topping5}</div>
            ) : null}
            <label>Topping Six: </label>
            {selector('topping6', values.topping6, handleChange, handleBlur)}
            {errors.topping6 && touched.topping6 ? (
              <div className="error-div">{errors.topping6}</div>
            ) : null}
            <label>Topping Seven: </label>
            {selector('topping7', values.topping7, handleChange, handleBlur)}
            {errors.topping7 && touched.topping7 ? (
              <div className="error-div">{errors.topping7}</div>
            ) : null}
            <label>Topping Eight: </label>
            {selector('topping8', values.topping8, handleChange, handleBlur)}
            {errors.topping8 && touched.topping8 ? (
              <div className="error-div">{errors.topping8}</div>
            ) : null}
            <label>Special Instructions: </label>
            <Field name="specialInstructions" />
            {errors.specialInstructions && touched.specialInstructions ? (
              <div className="error-div">{errors.specialInstructions}</div>
            ) : null}
            <label>Terms of Service: </label>
            <Field name="terms" type="checkbox" id="terms" />
            {errors.terms && touched.terms ? (
              <div className="error-div">{errors.terms}</div>
            ) : null}
            <span className="button-container">
              <button type="submit" disabled={!( dirty && isValid && values.terms )} className="glow-on-hover" >Place Order</button>
            </span>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Order;