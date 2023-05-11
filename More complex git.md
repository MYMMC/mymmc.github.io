Sure, here's an example script that generates a more complex file and folder structure for the bank app, adds some of my recommendations, and commits it to a new repository on GitHub using the GitHub API and the `git` command line tool:

```bash
#!/bin/bash

# Set the repository name and file structure
REPO_NAME="bank-app"
FILE_STRUCTURE="
bank-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    index.js
    App.js
    App.css
    components/
      Header.js
      Footer.js
      Account.js
      Transaction.js
    pages/
      Home.js
      Accounts.js
      Transactions.js
    data/
      accounts.json
      transactions.json
    utils/
      api.js
      helpers.js
  tests/
    account.test.js
    transaction.test.js
"

# Create the repository on GitHub
curl -u "USERNAME:TOKEN" https://api.github.com/user/repos -d '{"name":"'$REPO_NAME'"}'

# Clone the repository locally
git clone https://github.com/USERNAME/$REPO_NAME.git

# Add the file structure to the repository
cd $REPO_NAME
echo "$FILE_STRUCTURE" > file_structure.txt
git add .
git commit -m "Initial commit"

# Create the accounts and transactions data files
mkdir data
echo '{"accounts": []}' > data/accounts.json
echo '{"transactions": []}' > data/transactions.json

# Add the data files to the repository
git add data/accounts.json
git add data/transactions.json
git commit -m "Add initial data files"

# Create the API and helpers files
mkdir utils
touch utils/api.js
touch utils/helpers.js

# Add the API and helpers files to the repository
git add utils/api.js
git add utils/helpers.js
git commit -m "Add API and helpers files"

# Create the tests directory and files
mkdir tests
touch tests/account.test.js
touch tests/transaction.test.js

# Add the tests files to the repository
git add tests/account.test.js
git add tests/transaction.test.js
git commit -m "Add initial tests"

# Install dependencies and add to repository
npm init -y
npm install express body-parser cors --save
npm install mocha chai --save-dev
git add package.json
git add package-lock.json
git commit -m "Add dependencies"

# Create the server file
touch server.js

# Add the server file to the repository
git add server.js
git commit -m "Add server file"

# Add a .gitignore file to ignore node_modules and other files
echo "node_modules/" > .gitignore
echo ".DS_Store" >> .gitignore
git add .gitignore
git commit -m "Add .gitignore file"

# Push the changes to GitHub
git push origin master

# Initialize a new branch for development
git checkout -b development
git push origin development

# Set up continuous integration and deployment with Jenkins
# (Assuming Jenkins is already installed and configured)
echo "pipeline {
  agent any
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
      }
    }
    stage('Test') {
      steps {
        sh 'npm test'
      }
    }
    stage('Deploy') {
      steps {
        sh 'npm run deploy'
      }
    }
  }
}" > Jenkinsfile
git add Jenkinsfile
git commit -m "Add Jenkinsfile"
git push origin development

# Create a deploy script to deploy the app to a server
echo "#!/bin/bash

# Deploy the app to the server
ssh user@server 'cd /var/www/bank-app && git pull && npm install && pm2 restart server.js'" > deploy.sh
chmod +x deploy.sh
git add deploy.sh
git commit -m "Add deploy script"
git push origin development
```

Replace `USERNAME` and `TOKEN` with your GitHub username and personal access token, respectively. Also, make sure to update the `REPO_NAME` and `FILE_STRUCTURE` variables with the desired repository name and file structure, respectively.

This script adds several new features to the previous example, including:

- A `tests` directory with `account.test.js` and `transaction.test.js` files for testing the app
- Installation of dependencies using `npm` and committing the `package.json` and `package-lock.json` files to the repository
- A `server.js` file for running the app
- A `.gitignore` file to ignore `node_modules` and other files
- A `development` branch for development work
- A `Jenkinsfile` for setting up continuous integration and deployment with Jenkins
- A `deploy.sh` script for deploying the app to a server using `ssh`, `git`, `npm`, and `pm2`

These features can help improve the quality and maintainability of the app, as well as streamline the development and deployment process.

Note that this is just an example and the actual script may need to be modified depending on your specific needs. For example, you may want to use a different testing framework or deployment tool, or add additional files or directories.

Overall, the key to building a complex app on GitHub is to break the process down into smaller steps and automate as much as possible using scripts and tools. This can help save time and ensure consistency across projects, as well as improve the quality and maintainability of the app.
