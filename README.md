# ExpressJS honeypots

This repository contains a collection of honeypots for the Express framework. 

These honeypots can help ensure false positives for various automated vulnerability scanning tools, which allows for protection against automated attacks, bot attacks, and makes life difficult for hackers (especially beginners). 

## Installation

To install the honeypots, simply clone the repository or use npm and run the following command:

```bash
npm install express-honeypots
```

## Usage

To use the honeypots, simply import the module and use the `honeypots` function. 

```javascript
import express from 'express';
import honeypots from 'express-honeypots';    

const app = express();

app.use(honeypots());

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
```
