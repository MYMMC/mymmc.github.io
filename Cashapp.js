2. CashApp:

```
// Home.js
import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { refundToCashApp, depositToCashApp } from '../redux/paymentSlice';

function Home() {
  const dispatch = useDispatch();

  const handleRefundToCashApp = () => {
    dispatch(refundToCashApp());
  };

  const handleDepositToCashApp = () => {
    dispatch(depositToCashApp());
  };

  return (
    <div>
      <Button onClick={handleRefundToCashApp}>Instant Refund to CashApp</Button>
      <Button onClick={handleDepositToCashApp}>Instant Deposit to CashApp</Button>
    </div>
  );
}

export default Home;

// paymentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const refundToCashApp = createAsyncThunk(
  'payment/refundToCashApp',
  async () => {
    const response = await axios.post('/api/payment/cashapp/refund');
    return response.data;
  }
);

export const depositToCashApp = createAsyncThunk(
  'payment/depositToCashApp',
  async (amount) => {
    const response = await axios.post('/api/payment/cashapp/deposit', { amount });
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
      .addCase(refundToCashApp.pending, (state) => {
        state.loading = true;
      })
      .addCase(refundToCashApp.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(refundToCashApp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(depositToCashApp.pending, (state) => {
        state.loading = true;
      })
      .addCase(depositToCashApp.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(depositTo