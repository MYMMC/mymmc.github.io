1. Header.js

```
import React from 'react';
import { Link } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

function AppHeader() {
  return (
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Home</Link>
        </Menu.Item>
        <Menu.Item key="2">
          <Link to="/wallet">Wallet</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
}

export default AppHeader;
```