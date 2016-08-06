# PlasticJS

[![Build Status](https://travis-ci.org/dannytech/plasticjs.svg?branch=master)](https://travis-ci.org/dannytech/plasticjs)

PlasticJS is an [Express](http://expressjs.com)-compatible all-in-one payment library for NodeJS web applications.
It supports integration with many existing payment services, including Stripe, PayPal, BrainTree, and more to come

## Install
```
$ npm install plasticjs
```

## Usage

#### Configuring Providers

By default, PlasticJS does not come with any payment providers in it's package. It is designed to allow other modules,
providers, plug into it so you can customize how your users support you. To add a provider is simple: ```npm install``` it,
then require it into Plastic:

```javascript
var stripe = require("plasticjs-stripe").Provider;
plastic.use("stripe", stripe({
    
}));
```

#### Express middleware

PlasticJS provides easy integration into [Express](http://expressjs.com) using middleware:

When you want to add a payment page:

```javascript
// Opens the payment page for the provider
app.get("/stripe", plastic.pay("stripe"));

// Pays after form submission
app.post("/stripe", plastic.pay("stripe"));
```

## Providers

|Provider
|--------
|[Stripe](https://github.com/dannytech/plasticjs-stripe)
|[Paypal]()
|[BrainTree]()