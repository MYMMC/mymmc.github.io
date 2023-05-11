
1. PayPal:

```
// Home.js
import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { refundToPayPal, depositToPayPal } from '../redux/paymentSlice';

function Home() {
  const dispatch = useDispatch();

  const handleRefundToPayPal = () => {
    dispatch(refundToPayPal());
  };

  const handleDepositToPayPal = () => {
    dispatch(depositToPayPal());
  };

  return (
    <div>
      <Button onClick={handleRefundToPayPal}>Instant Refund to PayPal</Button>
      <Button onClick={handleDepositToPayPal}>Instant Deposit to PayPal</Button>
    </div>
  );
}

export default Home;

// paymentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const refundToPayPal = createAsyncThunk(
  'payment/refundToPayPal',
  async () => {
    const response = await axios.post('/api/payment/paypal/refund');
    return response.data;
  }
);

export const depositToPayPal = createAsyncThunk(
  'payment/depositToPayPal',
  async (amount) => {
    const response = await axios.post('/api/payment/paypal/deposit', { amount });
    return response.data;
  }
);

const paymentSlice = createSlice({
  name: 'payment',
  initialState: {
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refundToPayPal.pending, (state) => {
        state.loading = true;
      })
      .addCase(refundToPayPal.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(refundToPayPal.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(depositToPayPal.pending, (state) => {
        state.loading = true;
      })
      .addCase(depositToPayPal.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(depositTo