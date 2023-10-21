import React, { useState } from "react";
import { Button, TextField, Container, Typography } from "@mui/material";

const ActivationPaymentDetails = () => {
  const [activationPaymentDetails, setActivationPaymentDetails] = useState({
    activationCode: "",
    paymentMethod: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setActivationPaymentDetails({ ...activationPaymentDetails, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(activationPaymentDetails);
  };

  return (
    <Container maxWidth="sm">
      <Typography variant="h4" align="center" gutterBottom>
        <b> Activation and Payment Details</b>
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          id="activation-code"
          label="Activation Code"
          variant="outlined"
          type="text"
          name="activationCode"
          value={activationPaymentDetails.activationCode}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="payment-method"
          label="Payment Method"
          variant="outlined"
          type="text"
          name="paymentMethod"
          value={activationPaymentDetails.paymentMethod}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="card-number"
          label="Card Number"
          variant="outlined"
          type="text"
          name="cardNumber"
          value={activationPaymentDetails.cardNumber}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="expiration-date"
          label="Expiration Date"
          variant="outlined"
          type="text"
          name="expirationDate"
          value={activationPaymentDetails.expirationDate}
          onChange={handleChange}
          margin="normal"
        />
        <TextField
          fullWidth
          id="cvv"
          label="CVV"
          variant="outlined"
          type="text"
          name="cvv"
          value={activationPaymentDetails.cvv}
          onChange={handleChange}
          margin="normal"
        />
        <Button variant="contained" type="submit" color="success" fullWidth>
          Proceed To Payment
        </Button>
      </form>
    </Container>
  );
};

export default ActivationPaymentDetails;
