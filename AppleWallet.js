3. Apple Wallet:

```
// Home.js
import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { refundToAppleWallet, depositToAppleWallet } from '../redux/paymentSlice';

function Home() {
  const dispatch = useDispatch();

  const handleRefundToAppleWallet = () => {
    dispatch(refundToAppleWallet());
  };

  const handleDepositToAppleWallet = () => {
    dispatch(depositToAppleWallet());
  };

  return (
    <div>
      <Button onClick={handleRefundToAppleWallet}>Instant Refund to Apple Wallet</Button>
      <Button onClick={handleDepositToAppleWallet}>Instant Deposit to Apple Wallet</Button>
    </div>
  );
}

export default Home;

// paymentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const refundToAppleWallet = createAsyncThunk(
  'payment/refundToAppleWallet',
  async () => {
    const response = await axios.post('/api/payment/applewallet/refund');
    return response.data;
  }
);

export const depositToAppleWallet = createAsyncThunk(
  'payment/depositToAppleWallet',
  async (amount) => {
    const response = await axios.post('/api/payment/applewallet/deposit', { amount });
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
      .addCase(refundToAppleWallet.pending, (state) => {
        state.loading = true;
      })
      .addCase(refundToAppleWallet.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(refundToAppleWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(depositToAppleWallet.pending, (state) => {
        state.loading = true;
      })
      .addCase(depositToAppleWallet.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(depositTo