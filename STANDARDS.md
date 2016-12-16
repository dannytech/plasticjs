# Provider standards

This document provides the templates used for universal transactions and data handling by PlasticJS Providers.

### Required functions

* `balance` Retrieves a object describing the customer's account balance
* `pay` Charges the given amount against a payment token
* `subscribe` Subscribes the given customer to a plan
* `plan` Creates/modifies or retrieves a plan
* `product` Creates/modifies or retrieves a product

### Object definitions

All objects can contain these properties:

* `metadata` *object* Arbitrary data relevant to the object (i.e. user email, text description, etc)
* `events` *object* The time events occurred. Events include:
    * `created` When the object was created
    * `started` When the object entered the `started` state
    * `updated` When the object was last updated
    * `ended` When the object entered the `ended` state
* `status` *string* The current state of the object, can be:
    * `started`
    * `ended`

##### Currency object

* `type` *string, required* "currency"
* `currency` *string, required* Three character ISO 4271 code
* `amount` *integer, required* Amount of currency, in cents or equivalent
* `sources` *array of `paymentsource`, optional* Sources of the currency
* `netAmount` *integer, required* The net amount of currency, in cents or equivalent
* `transfers` *array of `transfers`, optional* Array of transfers, usually used in the context of transactions

##### Charge object

* `type` *string, required* "charge"
* `id` *string, required* Unique ID of charge, generated by provider
* `amount` *`currency`, required* Charge details
* `customer` *`customer`, required* The customer that was charged
* `transaction` *`invoice`, required* The invoice associated with the charge
* `events` *see [Object definitions](#objectdefinitions), optional* Created event

##### Customer object

* `type` *string, required* "customer"
* `id` *string, required* Unique customer ID generated by provider
* `balance` *currency, optional* Customer balance
* `sources` *array of `paymentsource`, required* Payment sources

##### Subscription object

* `type` *string, required* "subscription"
* `id` *string, required* Unique subscription ID generated by provider
* `events` *see [Object definitions](#objectdefinitions), optional* `created`, `started`, `updated`, and `ended` events
* `trialPeriod` *object, optional* Start and end dates for trial options
    * `start` *date* Start date of trial
    * `end` *date* End date of trial
* `status` *`status`, required* The current status of the subscription

##### Payment source

* `type` *string, required* "paymentsource"
* `id` *string, required* Unique identifier for payment source
* `events` *see [Object definitions](#objectdefinitions), optional* `created`, `updated`, and `ended` events
* `status` *`status`, required* The current status of the payment source