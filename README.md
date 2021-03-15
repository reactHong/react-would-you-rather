# Would you rather - React

## Overview

This is a simple application that answers 'Would you rather' question' for learning purpose. The data of this application is static data. The modified data would be removed when you refresh the page. It should be modified with back-end.


## Contents

- [App Preview](#app-preview)
- [Run the application](#run-the-application)
- [Implementation](#implementation)
- [Features](#features)
- [Further TO DO LIST](#further-to-do-list)
- [Create React App](#create-react-app)
- [Additional Dependencies](#additional-dependencies)

## App Preview

Question List             |  Leader Board
:-------------------------:|:-------------------------:
<img src='http://drive.google.com/uc?export=view&id=1KcTIWKfsv9c2CJEow9ziFNJ1X2mO0D8z' width='100%' /> |  <img src='http://drive.google.com/uc?export=view&id=1pdLxyLJcGhWKgvpwPRlun1GH6gfqAz54' width='100%' /><br>
<strong>Question</strong>             |  <strong>Result</strong>
<img src='http://drive.google.com/uc?export=view&id=1PNuVGvbC1XuGPEOdnoPC0uveJSQZummA' width='100%' /> | <img src='http://drive.google.com/uc?export=view&id=13V6PDeQ-ZCSmbvho1JuRpvwk064RSkss' width='100%' />



## Run the application

To run the application:
* Install all dependencies with `yarn install` or `npm install`
* Start the application with `yarn start` or `npm start`


## Implementation

- Data management with redux / react-redux
- Handle asynchronous data with redux-thunk
- Maintain signed user with redux-persist
- Navigate with react-router-dom


## Features
- View the questions list
- View the poll
- Answer the poll
- Add a new question
- View a leader board
- Sign in/Sign out with static user data


## Further TO DO LIST

- [ ] Sign in/Sign up with Firebase
- [ ] Error handling with connected-react-router
  - Read the article - [Centralizing API error handling in React apps](https://itnext.io/centralizing-api-error-handling-in-react-apps-810b2be1d39d)
- [ ] Show the current status of the poll on the list

## Create React App

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app). You can find more information on how to perform common tasks [here](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md).


## Additional Dependencies
- redux
- redux-thunk
- redux-persist
- react-redux
- react-redux-loading-bar
- react-router-dom
- react-circular-progressbar
- @agney/react-loading
- node-sass
