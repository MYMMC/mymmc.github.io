3. Wallet.js

```
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Input, Spin } from 'antd';
import { depositToWallet } from '../redux/walletSlice';

function Wallet() {
  const [amount, setAmount] = React.useState('');
  const dispatch = useDispatch();
  const { balance, loading, error } = useSelector((state) => state.wallet);

  const handleDeposit = () => {
    dispatch(depositToWallet(amount));
    setAmount('');
  };

  return (
    <div>
      <h1>Wallet</h1>
      <p>Your current balance is: {balance}</p>
      <Input
        type="number"
        placeholder="Enter amount to deposit"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <Button type="primary" onClick={handleDeposit}>
        Deposit
      </Button>
      {loading && <Spin />}
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}

export default Wallet;
```