4. Google Wallet:

```
// Home.js
import React from 'react';
import { Button } from 'antd';
import { useDispatch } from 'react-redux';
import { refundToGoogleWallet, depositToGoogleWallet } from '../redux/paymentSlice';

function Home() {
  const dispatch = useDispatch();

  const handleRefundToGoogleWallet = () => {
    dispatch(refundToGoogleWallet());
  };

  const handleDepositToGoogleWallet = () => {
    dispatch(depositToGoogleWallet());
  };

  return (
    <div>
      <Button onClick={handleRefundToGoogleWallet}>Instant Refund to Google Wallet</Button>
      <Button onClick={handleDepositToGoogleWallet}>Instant Deposit to Google Wallet</Button>
    </div>
  );
}

export default Home;

// paymentSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const refundToGoogleWallet = createAsyncThunk(
  'payment/refundToGoogleWallet',
  async () => {
    const response = await axios.post('/api/payment/googlewallet/refund');
    return response.data;
  }
);

export const depositToGoogleWallet = createAsyncThunk(
  'payment/depositToGoogleWallet',
  async (amount) => {
    const response = await axios.post('/api/payment/googlewallet/deposit', { amount });
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
      .addCase(refundToGoogleWallet.pending, (state) => {
        state.loading = true;
      })
      .addCase(refundToGoogleWallet.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(refundToGoogleWallet.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(depositToGoogleWallet.pending, (state) => {
        state.loading = true;
      })
      .addCase(depositToGoogleWallet.fulfilled, (state) => {
        state.loading = false;
        // handle success
      })
      .addCase(depositTo