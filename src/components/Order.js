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
            return res.data;
          } );
        }}
      >
        {( { errors, touched, isValid, dirty, values, handleBlur, handleChange } ) => (
          <Form className="form">
            <label >First Name: </label>
            <Field name="firstName" />
            {errors.firstName && touched.firstName ? (
              <div>{errors.firstName}</div>
            ) : null}
            <label>Last Name: </label>
            <Field name="lastName" />
            {errors.lastName && touched.lastName ? (
              <div>{errors.lastName}</div>
            ) : null}
            <label>Email: </label>
            <Field name="email" type="email" />
            {errors.email && touched.email ? (
              <div>{errors.email}</div>
            ) : null}
            <label>Topping One: </label>
            <select name="topping1" value={values.topping1} onChange={handleChange} onBlur={handleBlur} >
              <option value="" label="Select a topping" />
              <option value="pepperoni" label="Pepperoni" />
              <option value="onions" label="Onions" />
              <option value="garlic" label="Garlic" />
              <option value="olives" label="Olives" />
              <option value="goatCheese" label="Goat Cheese" />
              <option value="jalepenos" label="Jalepenos" />
              <option value="bellPepper" label="Bell Pepper" />
              <option value="anchovies" label="Anchovies" />
              <option value="beef" label="Beef" />
              <option value="chicken" label="chicken" />
              <option value="bbqChicken" label="BBQ Chicken" />
            </select>
            {errors.topping1 && touched.topping1 ? (
              <div>{errors.topping1}</div>
            ) : null}
            <label>Topping Two: </label>
            <select name="topping2" value={values.topping2} onChange={handleChange} onBlur={handleBlur} >
              <option value="" label="Select a topping" />
              <option value="pepperoni" label="Pepperoni" />
              <option value="onions" label="Onions" />
              <option value="garlic" label="Garlic" />
              <option value="olives" label="Olives" />
              <option value="goatCheese" label="Goat Cheese" />
              <option value="jalepenos" label="Jalepenos" />
              <option value="bellPepper" label="Bell Pepper" />
              <option value="anchovies" label="Anchovies" />
              <option value="beef" label="Beef" />
              <option value="chicken" label="chicken" />
              <option value="bbqChicken" label="BBQ Chicken" />
            </select>
            {errors.topping2 && touched.topping2 ? (
              <div>{errors.topping2}</div>
            ) : null}
            <label>Topping Three: </label>
            <select name="topping3" value={values.topping3} onChange={handleChange} onBlur={handleBlur} >
              <option value="" label="Select a topping" />
              <option value="pepperoni" label="Pepperoni" />
              <option value="onions" label="Onions" />
              <option value="garlic" label="Garlic" />
              <option value="olives" label="Olives" />
              <option value="goatCheese" label="Goat Cheese" />
              <option value="jalepenos" label="Jalepenos" />
              <option value="bellPepper" label="Bell Pepper" />
              <option value="anchovies" label="Anchovies" />
              <option value="beef" label="Beef" />
              <option value="chicken" label="chicken" />
              <option value="bbqChicken" label="BBQ Chicken" />
            </select>
            {errors.topping3 && touched.topping3 ? (
              <div>{errors.topping3}</div>
            ) : null}
            <label>Topping Four: </label>
            <select name="topping4" value={values.topping4} onChange={handleChange} onBlur={handleBlur} >
              <option value="" label="Select a topping" />
              <option value="pepperoni" label="Pepperoni" />
              <option value="onions" label="Onions" />
              <option value="garlic" label="Garlic" />
              <option value="olives" label="Olives" />
              <option value="goatCheese" label="Goat Cheese" />
              <option value="jalepenos" label="Jalepenos" />
              <option value="bellPepper" label="Bell Pepper" />
              <option value="anchovies" label="Anchovies" />
              <option value="beef" label="Beef" />
              <option value="chicken" label="chicken" />
              <option value="bbqChicken" label="BBQ Chicken" />
            </select>
            {errors.topping4 && touched.topping4 ? (
              <div>{errors.topping4}</div>
            ) : null}
            <label>Topping Five: </label>
            <select name="topping5" value={values.topping5} onChange={handleChange} onBlur={handleBlur} >
              <option value="" label="Select a topping" />
              <option value="pepperoni" label="Pepperoni" />
              <option value="onions" label="Onions" />
              <option value="garlic" label="Garlic" />
              <option value="olives" label="Olives" />
              <option value="goatCheese" label="Goat Cheese" />
              <option value="jalepenos" label="Jalepenos" />
              <option value="bellPepper" label="Bell Pepper" />
              <option value="anchovies" label="Anchovies" />
              <option value="beef" label="Beef" />
              <option value="chicken" label="chicken" />
              <option value="bbqChicken" label="BBQ Chicken" />
            </select>
            {errors.topping5 && touched.topping5 ? (
              <div>{errors.topping5}</div>
            ) : null}
            <label>Topping Six: </label>
            <select name="topping6" value={values.topping6} onChange={handleChange} onBlur={handleBlur} >
              <option value="" label="Select a topping" />
              <option value="pepperoni" label="Pepperoni" />
              <option value="onions" label="Onions" />
              <option value="garlic" label="Garlic" />
              <option value="olives" label="Olives" />
              <option value="goatCheese" label="Goat Cheese" />
              <option value="jalepenos" label="Jalepenos" />
              <option value="bellPepper" label="Bell Pepper" />
              <option value="anchovies" label="Anchovies" />
              <option value="beef" label="Beef" />
              <option value="chicken" label="chicken" />
              <option value="bbqChicken" label="BBQ Chicken" />
            </select>
            {errors.topping6 && touched.topping6 ? (
              <div>{errors.topping6}</div>
            ) : null}
            <label>Topping Seven: </label>
            <select name="topping7" value={values.topping7} onChange={handleChange} onBlur={handleBlur} >
              <option value="" label="Select a topping" />
              <option value="pepperoni" label="Pepperoni" />
              <option value="onions" label="Onions" />
              <option value="garlic" label="Garlic" />
              <option value="olives" label="Olives" />
              <option value="goatCheese" label="Goat Cheese" />
              <option value="jalepenos" label="Jalepenos" />
              <option value="bellPepper" label="Bell Pepper" />
              <option value="anchovies" label="Anchovies" />
              <option value="beef" label="Beef" />
              <option value="chicken" label="chicken" />
              <option value="bbqChicken" label="BBQ Chicken" />
            </select>
            {errors.topping7 && touched.topping7 ? (
              <div>{errors.topping7}</div>
            ) : null}
            <label>Topping Eight: </label>
            <select name="topping8" value={values.topping8} onChange={handleChange} onBlur={handleBlur} >
              <option value="" label="Select a topping" />
              <option value="pepperoni" label="Pepperoni" />
              <option value="onions" label="Onions" />
              <option value="garlic" label="Garlic" />
              <option value="olives" label="Olives" />
              <option value="goatCheese" label="Goat Cheese" />
              <option value="jalepenos" label="Jalepenos" />
              <option value="bellPepper" label="Bell Pepper" />
              <option value="anchovies" label="Anchovies" />
              <option value="beef" label="Beef" />
              <option value="chicken" label="chicken" />
              <option value="bbqChicken" label="BBQ Chicken" />
            </select>
            {errors.topping8 && touched.topping8 ? (
              <div>{errors.topping8}</div>
            ) : null}
            <label>Special Instructions: </label>
            <Field name="specialInstructions" />
            {errors.specialInstructions && touched.specialInstructions ? (
              <div>{errors.specialInstructions}</div>
            ) : null}
            <label>Terms of Service: </label>
            <Field name="terms" type="checkbox" id="terms" />
            {errors.terms && touched.terms ? (
              <div>{errors.terms}</div>
            ) : null}
            <button type="submit" disabled={!( dirty && isValid && values.terms )} >Place Order</button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default Order;