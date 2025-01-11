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

Also you can enable the honeypots by passing an object with the enabled honeypots

```javascript
app.use(honeypots({
    nextjsStaticFilesHoneypot: true,
    nowItsPHP: true,
    directoryListing: true,
    phpShell: true,
    oldApache: true,
    dotGit: true,
}));
```

## Honeypots
### NextJS Static Files Honeypot
This honeypot is designed to mimic the behavior of a NextJS application. It will return a 404 error for any request that contains the string `_next/static/`.

### Now It's PHP
This honeypot provides x-powered-by: PHP in the response headers. This can be used to trick automated scanners into thinking that the server is running PHP.

### Old Apache
This honeypot provides the server header `Apache/2.2.22 (Ubuntu)` in the response headers. This can be used to trick automated scanners into thinking that the server is running an old version of Apache.

### Directory Listing
This honeypot is designed to mimic the behavior of an Apache that allows directory listing if /img/ is requested.

### PHP Shell
This honeypot simulates a working php shell on /img/a.php

### .git
It seems that someone forgot to close access to the repository folder... :)

## Results

![img.png](https://github.com/nedobylskiy/express-honey-pots/raw/master/img.png) ![img_1.png](https://github.com/nedobylskiy/express-honey-pots/raw/master/img_1.png) ![img_2.png](https://github.com/nedobylskiy/express-honey-pots/raw/master/img_2.png) ![img_3.png](https://github.com/nedobylskiy/express-honey-pots/raw/master/img_3.png)

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.
