import React, { useState, useEffect } from 'react';
import { Link, useHistory } from "react-router-dom";  
import {CardElement, useStripe, useElements} from '@stripe/react-stripe-js';
import axios from 'axios'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Alert from 'react-bootstrap/Alert'
import Spinner from 'react-bootstrap/Spinner'
import '../main.css'

export default function Donations() {
  const [loading, setLoading] = useState(false)
  const [alert, setAlert] = useState(false)
  const [alertType, setAlertType] = useState('warning')
  const [alertText, setAlertText] = useState('Something went wrong, please try again later!')
  const history = useHistory()
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if(alert) {
      setTimeout(() => {
        setAlert(false)
      }, 5000)
    }
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true)

    if (!stripe || !elements) {
      // Stripe.js has not loaded yet. Make sure to disable
      // form submission until Stripe.js has loaded.
      return;
    }
    const email = event.target.email.value.trim()
    const amount = event.target.amount.value.replace(/\D/g,'')

    const res = await axios({
      method: 'post',
      url: '/api/stripe_intent',
      data: {
        email: email,
        amount: parseInt(amount),

      }
    })

    const clientSecret = res.data['client_secret']

    const result = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement),
        billing_details: {
          email: email,
        }
      }
    });

    if (result.error) {
      // Show error to your customer (e.g., insufficient funds)
      console.log(result.error.message);
      setAlert(true)
      setAlertType('danger')
      setAlertText('Something went wrong, please try again later!')
    } else {
      if (result.paymentIntent.status === 'succeeded') {
        setLoading(false)
        setAlert(true)
        setAlertType('success')
        setAlertText('Success! Thank You For The Donation!')
      }
    }
  }

  const CARD_OPTIONS = {
    iconStyle: "solid",
    style: {
      base: {
        fontFamily: 'Noto Sans JP, sans-serif',
        fontSize: '17px',
        fontSmoothing: 'antialiased',
        '::placeholder': {
          color: '#999999',
        },
      },
    }
  };

  function renderAlert() {
    if(alert) {
      return(
        <Alert variant={alertType}>
          {alertText}
        </Alert>
      )
    }
  }

  function renderButtonOrLoader() {
    if(loading === true) {
      return(
        <Spinner animation="border" style={{margin: '30px'}} />
      )
    } else {
      return(
        <Button variant="outline-info" type="submit" disabled={!stripe}>
          Donate
        </Button>
      )
    }
  }

  return (
    <div>
    {renderAlert()}
    <div className="content-section">
      <legend className="border-bottom mb-4">Donations</legend>
      <Form onSubmit={(event) => handleSubmit(event)}>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control 
            required
            size="md"
            type="email"
            placeholder="Receipt Email" />
        </Form.Group>
        <Form.Group controlId="amount">
          <Form.Label>Amount(USD)</Form.Label>
          <Form.Control 
            required
            size="md"
            type="amount"
            placeholder="$0.00" />
        </Form.Group>
        <Form.Text id="amountHelpBlock" style={{color: 'red'}}>
          Please enter an amount such as: "$5.00"; Include ".00" or amount will be incorrect!
        </Form.Text>
        <Form.Group controlId="card" className="border rounded p-2 my-4" style={{backgroundColor: '#f5eff5'}}>
          <CardElement options={CARD_OPTIONS} />
        </Form.Group>
          {renderButtonOrLoader()}
        <Form.Text id="passwordHelpBlock" muted>
          This will not ask for confirmation
        </Form.Text>
      </Form>
    </div>
    <div className="border-top pt-3">
      <small className="text-muted">
        For issues please contact:
      </small>
      <br />
      <a href="mailto:JumpingAfterRain@gmail.com?subject=Donation Issue">JumpingAfterRain@gmail.com</a>
    </div>
  </div>
  )
}
