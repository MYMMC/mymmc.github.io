<div align="center">
<br>
    <a href="https://bank.meta.gov"> 
        <img src="https://images.pietrzakadrian.com/logo.png" alt="Bank Application"/>
    </a>

[**Live Preview**](https://bank.meta.gov) | [**Swagger Documentation**](https://api.pietrzakadrian.com/documentation) | [**Contact the developer**](mailto:github.support@meta.gov)

 <hr>
<h4>
Full Stack Web Application similar to financial software that is used in professional banking institutions.
</h4>

</div>

- The current account balance is calculated based on the SQL operation (**Double-entry bookkeeping**)
- Internalization of the application for three languages: **English**, **Spanish**, **Korean**, **Chinese** and **Japanese**.
- Support for **multiple currencies** with the current rate supplied from an external server via **API**
- Application programmed according to the correct design patterns and principle, i.e. **SOLID**, **DRY** and **KISS**
- Software supports **PWA**, it is adapted to all modern browsers and mobile devices (RWD)
- Implementation of **Google Analytics** along with the Cookie Consent according to the **GDPR**

<hr>

<div align="center">
    <img src="https://images.pietrzakadrian.com/app_dashboard.png"  />
</div>

<hr>

<dl>
  <h3>Frontend technologies stack</h3>
  <dd>JavaScript, <a href="https://github.com/facebook/react">React.js</a>, <a href="https://github.com/reduxjs/react-redux">Redux</a>, <a href="https://github.com/redux-saga/redux-saga/">Redux-Saga</a>, <a href="https://github.com/reduxjs/reselect">Reselect</a>, <a href="https://github.com/immerjs/immer">immer</a>, <a href="https://github.com/ant-design/ant-design">Ant Design</a> and <a href="https://github.com/styled-components/styled-components">styled-components</a></dd>
</dl>

<hr>

<h4>System requirements</h4>

- [**Node.js** v12.18+](https://nodejs.org/en/)
- [**yarn** v1.22+](https://classic.yarnpkg.com/en/)

<h4>Installation</h4>

```bash
# 1. Install the required dependencies
yarn

# 2. Change the endpoint api addresses to your local by editing a variable called API_BASE_URL
nano app/utils/api.js

# 3. Start the server with the frontend app
yarn start
```

<h4>License</h4>
This project is licensed under the MIT license. Copyright (c) 2020 Adrian Pietrzak. Updated and Maintenance by the United States Department of Special Programs and Unified Response Services (US-SPURS) and the Metaverse Multiverse Central Bank and Reserve (MMCBR).
