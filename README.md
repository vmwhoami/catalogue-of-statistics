## Catalogue-Of-Statisctics

In this project, I developed a front-end web application, catalogue of Cryptocurrencies using [CoinAPI](https://www.coinapi.io/) 
to collect the data from my React Application.

The application features include:

Listing all Crypto that is worth more than 1$.
Listing Crypto that is worth more than 10$.
Listing Crypto that is worth more than 50$.
Listing Crypto that is worth more than 100$.
Display an error if a connection to the API is not established.
Dynamic routes for individual coin item and display price stats for the last 15 days.


![screenshot](./catalogue-of-statistics.gif)

### Live Demo

Open [this link](https://catalogue-of-statisctics.netlify.app/) to view it live.


## Video Presentation

[YouTube link](https://youtu.be/jjUJHzfOuIA)

## Getting Started

To get a local copy up and running follow these simple example steps.

### Prerequisites

Make sure Node.js is running on your local machine

### Setup

```bash
$ git clone https://github.com/vmwhoami/catalogue-of-statisctics.git
$ cd catalogue-of-statisctics
```

Install modules:

```
npm install
```
## Setup your API Key

I used the  [COINAPI](https://www.coinapi.io/). Signup and get your key.
Create .env file, open it and add REACT_APP_API_KEY=xxxxxxxxxxxxxxxxxxxxx


Run the App:
```
npm start
```



## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment
```bash
   git add .
    git commit -m "ready for first push to heroku"  
    heroku create $APP-NAME --buildpack mars/create-react-app
    git push heroku $BRANCH_NAME:master
```

## Author

**Vitalie Melnic**

- Github: [@vmwhoami](https://github.com/vmwhoami/)
- Twitter: [@vmwhoami](https://twitter.com/vmwhoami)
- Linkedin: [vitalie-melnic](https://www.linkedin.com/in/vitalie-melnic/)
 

## License

Distributed under the MIT License. See `LICENSE` for more information.

## 🤝 Contributing

Contributions, issues and feature requests are welcome!

Feel free to check the [issues page](https://github.com/vmwhoami/catalogue-of-statisctics/issues).

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments
 - [Microverse Inc](https://www.microverse.org/)
 - [COINAPI](https://www.coinapi.io/)
