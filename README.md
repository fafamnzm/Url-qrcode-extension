# URL QR Code maker

- A browser extension which gets the url and makes it into a qrcode so you can continue browsing on your mobile without signing in to browser accounts.

want to continue reading an article you were reading on your laptop from your mobile?
the URL is too complicated and you dont even remember how you got there??!!
If you like me have these issues, then check out the `QR Code creator` extenstion in your browser add-ons market and say nice things about it! :D

# Question!

Why does the bundle.js have so many lines?

> Because you cannot import javascript dependancies in browser
> So I had to use browserify to import the package for me
> Basically it is the imported version of the qrcocde package

### Installation

Install the dependencies if you want to alter things.
make sure to run browserify command before refereshing the popup.heml so the bundle is recreated

```sh
$ npm i qrcode
$ npm install -g browserify
$ browserify popup.js -d --s bundle > bundle.js
```
