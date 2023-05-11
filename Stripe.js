5. Stripe:

```
// Home.js
import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { refundToStripe, depositToStripe } from '../redux/paymentSlice';

function Home() {
  const dispatch = useDispatch();

  const handleRefundToStripe = () => {
    dispatch(refundToStripe());
  };

  const handleDepositToStripe = () => {
    dispatch(depositToStripe());
  };

  return (
    <div>
      <Button onClick={handleRefundToStripe}>Instant Refund to Stripe</Button>
      <Button onClick={handleDepositToStripe}>Instant Deposit to Stripe</Button>
    </div>
  );
}

export default Home;

// paymentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const refundToStripe = createAsyncThunk(
  'payment/refundToStripe',
  async () => {
    const response = await axios.post('/api/payment/stripe/refund');
    return response.data;
  }
);

export const depositToStripe = createAsyncThunk(
  'payment/depositToStripe',
  async (amount) => {
    const response = await axios.post('/api/payment/stripe/deposit', { amount });
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
      .addCase(refundToStripe.pending, (state) => {
        state.loading = true;
      })
      .addCase(refundToStripe.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(refundToStripe.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(depositToStripe.pending, (state) => {
        state.loading = true;
      })
      .addCase(depositToStripe.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(depositTo