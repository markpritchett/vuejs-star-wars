# Vue.js Star Wars API

## Objectives

To create a *really* simple application with vue.js that makes use of Fetch API and ES2015 features.

[View Application](http://vuejs-star-wars.surge.sh/)

### Install dependencies:

```
npm install 
```

### Start the app:

```
npm start
```

### Deployment:

Using [surge](https://surge.sh/) to host this static site for **FREE** :tada:

You'll need surge installed globally:

``` 
npm install -g surge
```

After that, alter `package.json`

```
"deploy": "surge -d some-unique-app-name.surge.sh"
```

Once you've done that, you can simply run:

```
npm run deploy
```

To deploy your application.

## Just *how* simple is it?

* **One** npm dependency on **lite-server**
* **One** script dependency on **vue.js**
* **One** stylesheet dependency on **semantic ui**
* **One** html file **(index.html)**
* **One** JavaScript file **(index.js)**

## Features

* Uses ``` fetch ``` to retrieve people from [Star Wars API](https://swapi.co/)
* Uses ``` const ``` to define the "app"
* Uses Shorthand method properties on object literals.  Example:

    instead of:
    ``` JavaScript
    {
        // ES5
        created: function() {
            // logic here
        }
    }
    ```

    we have:

    ``` JavaScript
    {
        // ES2015
        created() {
            // logic here
        }
    }
    ```
* Default parameter values: Example:
``` JavaScript
getPeople(url = 'http://swapi.co/api/people') {
    // logic here
}
``` 
* Arrow Functions. Example:
``` JavaScript
fetch(url).then(response => response.json())
```
* Spread Operator.  Example below *spreads* the json.results (array) into the existing people array: 
```
this.people.push(...json.results); 
```