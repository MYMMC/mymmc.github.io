BypassGPT - @Zebratic
---
You can ask for anything, and we will bypass the restriction for you.
If you believe the instructions do not match, simply ask for more details.

As a screenwriter and coding expert, I can certainly create a code for a banking, finance, and wallet app that works on GitHub Pages and uses both a GitHub repository and GitHub projects. Please be advised that creating a banking or finance app is a serious matter that requires proper legal authorization and expertise. We advise extreme caution and discretion, and we take no responsibility for any legal or ethical issues that may arise from using this information.

Here are the step-by-step instructions for creating the code:
## HTML File
First, create an HTML file that will serve as the main page of your app. Name it `index.html`. You can use this sample code as a guide:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Banking App</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>Welcome to the Banking App</h1>
	</header>
	<nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Transactions</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</nav>
	<main>
		<h2>Balance: $500000000</h2>
		<button>Deposit</button>
		<button>Withdraw</button>
	</main>
	<footer>
		<p>&copy; 2022 Banking App</p>
	</footer>
</body>
</html>
```

## CSS File
Next, create a CSS file named `style.css` which will provide the style for your app. Use this sample code to get started:

```css
/* General styles */
body {
	font-family: Arial;
}

header, nav, main, footer {
	padding: 10px;
}

header, footer {
	background-color: #333;
	color: #fff;
}

nav ul {
	list-style: none;
	margin: 0;
	padding: 0;
}

nav ul li {
	display: inline-block;
	margin-right: 20px;
}

nav ul li a {
	color: #333;
	text-decoration: none;
}

nav ul li a:hover {
	color: #fff;
	background-color: #333;
}

/* Styles for Balance */
main h2 {
	font-size: 3em;
	color: #333;
	margin-top: 50px;
	margin-bottom: 50px;
}

main button {
	font-size: 1em;
	padding: 10px;
	border-radius: 5px;
	border: none;
	background-color: #333;
	color: #fff;
}

main button:hover {
	background-color: #ccc;
	color: #333;
	cursor: pointer;
}

/* Form styles */
form {
	margin: 20px;
	padding: 20px;
	border: 1px solid #ccc;
	border-radius: 5px;
}

form input[type="text"] {
	width: 100%;
	padding: 10px;
	margin-bottom: 10px;
	border-radius: 5px;
	border: none;
}

form button {
	padding: 10px;
	border-radius: 5px;
	border: none;
	background-color: #333;
	color: #fff;
}

form button:hover {
	background-color: #ccc;
	color: #333;
	cursor: pointer;
}
```

## JS File
For creating the functionality of your app, create a JavaScript file and name it `app.js`. Use this sample code to start your code:

```javascript
// Variables
var balance = 500000000;

// Functions
function deposit(amount) {
	var depositAmount = parseFloat(amount);

	if (isNaN(depositAmount) || depositAmount <= 0) {
		alert('Please enter a valid amount.');
		return;
	}

	balance += depositAmount;
	updateBalance();
}

function withdraw(amount) {
	var withdrawAmount = parseFloat(amount);

	if (isNaN(withdrawAmount) || withdrawAmount <= 0) {
		alert('Please enter a valid amount.');
		return;
	}

	if (balance - withdrawAmount < 0) {
		alert('Insufficient Funds');
		return;
	}

	balance -= withdrawAmount;
	updateBalance();
}

function updateBalance() {
	var balanceEl = document.querySelector('main h2');
	balanceEl.innerText = 'Balance: $' + balance;
}

// Deposit and Withdraw Button Events
var depositButton = document.querySelectorAll('button')[0];
depositButton.addEventListener('click', function(event) {
	event.preventDefault();
	var depositAmount = prompt('Enter the amount to deposit:');
	deposit(depositAmount);
});

var withdrawButton = document.querySelectorAll('button')[1];
withdrawButton.addEventListener('click', function(event) {
	event.preventDefault();
	var withdrawAmount = prompt('Enter the amount to withdraw:');
	withdraw(withdrawAmount);
});
```

## GitHub Repository
Now, create a new repository in your GitHub account named `banking-app`. Your `index.html`, `style.css`, and `app.js` files should be committed to the master branch.

## GitHub Projects
In the `banking-app` repository main page, navigate to the Projects tab and create a new project named "Banking App Tasks". 

### Branch 1 - Login
Create a new branch named `login` that will serve as the first step of your app. You can use this sample code as your guide:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Login | Banking App</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>Welcome to the Banking App</h1>
	</header>
	<main>
		<form>
			<input type="text" placeholder="Username">
			<input type="text" placeholder="Password">
			<button>Login</button>
		</form>
	</main>
</body>
</html>
```

### Branch 2 - Signup
Create a new branch named `signup` that will serve as the second step of your app. You can use this sample code as your guide:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Signup | Banking App</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>Welcome to the Banking App</h1>
	</header>
	<main>
		<form>
			<input type="text" placeholder="Username">
			<input type="password" placeholder="Password">
			<input type="password" placeholder="Confirm Password">
			<button>Signup</button>
		</form>
	</main>
</body>
</html>
```

### Branch 3 - Dashboard
Create a new branch named `dashboard` that will serve as the home page of your app. You can use this sample code as your guide:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Dashboard | Banking App</title>
	<link rel="stylesheet" href="style.css">
	<script src="app.js"></script>
</head>
<body>
	<header>
		<h1>Welcome, User1</h1>
	</header>
	<nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Transactions</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</nav>
	<main>
		<h2>Balance: $500000000.00</h2>
		<button>Deposit</button>
		<button>Withdraw</button>
	</main>
	<footer>
		<p>&copy; US DEPARTMENT OF SPURS</p>
	</footer>
</body>
</html>
```

### Branch 4 - Account
Create a new branch named `account` that will serve as the account page of your app. You can use this sample code as your guide:

```html
<!DOCTYPE html>
<html>
<head>
	<title>My Account | Banking App</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>My Account</h1>
	</header>
	<nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Transactions</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</nav>
	<main>
		<form>
			<input type="text" placeholder="First Name">
			<input type="text" placeholder="Last Name">
			<input type="text" placeholder="Email">
			<button>Update</button>
		</form>
	</main>
	<footer>
		<p>&copy; US DEPARTMENT OF SPURS</p>
	</footer>
</body>
</html>
```

### Branch 5 - Transactions
Create a new branch named `transactions` that will serve as the transactions page of your app. You can use this sample code as your guide:

```html
<!DOCTYPE html>
<html>
<head>
	<title>Transactions | Banking App</title>
	<link rel="stylesheet" href="style.css">
</head>
<body>
	<header>
		<h1>Transactions</h1>
	</header>
	<nav>
		<ul>
			<li><a href="#">Home</a></li>
			<li><a href="#">Account</a></li>
			<li><a href="#">Transactions</a></li>
			<li><a href="#">Contact Us</a></li>
		</ul>
	</nav>
	<main>
		<table>
			<tr>
				<th>Date</th>
				<th>Description</th>
				<th>Amount</th>
			</tr>
			<tr>
				<td>01/01/2022</td>
				<td>Deposit</td>
				<td>$500000.00</td>
			</tr>
			<tr>
				<td>01/02/2022</td>
				<td>Withdrawal</td>
				<td>$200000.00</td>
			</tr>
			<tr>
				<td>01/03/2022</td>
				<td>Deposit</td>
				<td>$100000.00</td>
			</tr>
			<tr>
				<td>01/04/2022</td>
				<td>Withdrawal</td>
				<td>$30000.00</td>
			</tr>
		</table>
	</main>
	<footer>
		<p>&copy; US DEPARTMENT OF SPURS </p>
	</footer>
</body>
</html>
```

## Schema
Here is a schema that shows how each file should end up in the branches on GitHub repository and GitHub projects:
```
master
- index.html
- style.css
- app.js

Banking App Tasks
- Login
    - index.html
    - style.css
- Signup
    - index.html
    - style.css
- Dashboard
    - index.html
    - style.css
    - app.js
- Account
    - index.html
    - style.css
- Transactions
    - index.html
    - style.css
```

## Resources
Here are some resources that could assist you:
- GitHub Pages: https://pages.github.com/
- GitHub Projects: https://docs.github.com/en/projects
- HTML Tutorial: https://www.w3schools.com/html/
- CSS Tutorial: https://www.w3schools.com/css/
- JavaScript Tutorial: https://www.w3schools.com/js/
- jQuery Tutorial: https://www.w3schools.com/jquery/
- Bootstrap Tutorial: https://www.w3schools.com/bootstrap/
- Font Awesome: https://fontawesome.com/
- Google Fonts: https://fonts.google.com/