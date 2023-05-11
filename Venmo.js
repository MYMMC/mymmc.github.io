7. Venmo:

```
// Home.js
import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { refundToVenmo, depositToVenmo } from '../redux/paymentSlice';

function Home() {
  const dispatch = useDispatch();

  const handleRefundToVenmo = () => {
    dispatch(refundToVenmo());
  };

  const handleDepositToVenmo = () => {
    dispatch(depositToVenmo());
  };

  return (
    <div>
      <Button onClick={handleRefundToVenmo}>Instant Refund to Venmo</Button>
      <Button onClick={handleDepositToVenmo}>Instant Deposit to Venmo</Button>
    </div>
  );
}

export default Home;

// paymentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const refundToVenmo = createAsyncThunk(
  'payment/refundToVenmo',
  async () => {
    const response = await axios.post('/api/payment/venmo/refund');
    return response.data;
  }
);

export const depositToVenmo = createAsyncThunk(
  'payment/depositToVenmo',
  async (amount) => {
    const response = await axios.post('/api/payment/venmo/deposit', { amount });
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
      .addCase(refundToVenmo.pending, (state) => {
        state.loading = true;
      })
      .addCase(refundToVenmo.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(refundToVenmo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(depositToVenmo.pending, (state) => {
        state.loading = true;
      })
      .addCase(depositToVenmo.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(depositToVenmo.rejected, (state, action) => {
