
```
// App.js
import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Layout } from 'antd';
import { useDispatch } from 'react-redux';
import { fetchWalletBalance } from './redux/walletSlice';
import Header from './components/Header';
import Home from './pages/Home';
import Wallet from './pages/Wallet';

const { Content } = Layout;

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchWalletBalance());
  }, [dispatch]);

  return (
    <Router>
      <Layout>
        <Header />
        <Content>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/wallet" component={Wallet} />
          </Switch>
        </Content>
      </Layout>
    </Router>
  );
}

export default App;

// walletSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchWalletBalance = createAsyncThunk(
  'wallet/fetchBalance',
  async () => {
    const response = await axios.get('/api/wallet/balance');
    return response.data;
  }
);

export const depositToWallet = createAsyncThunk(
  'wallet/deposit',
  async (amount) => {
    const response = await axios.post('/api/wallet/deposit', { amount });
    return response.data;
  }
);

const walletSlice = createSlice({
  name: 'wallet',
  initialState: {
    balance: 0,
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWalletBalance.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchWalletBalance.fulfilled, (state, action) => {
        state.loading = false;
        state.balance = action.payload;
      })
      .addCase(fetchWalletBalance.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(depositToWallet.pending, (state) => {
        state.loading = true;
      })
      .addCase(depositToWallet.fulfilled, (state, action) => {
        state.loading = false