```
want to continue reading an article you were reading on your laptop from your mobile?

the URL is too complicated and you dont even remember how you got there??!!

If you like me have these issues, then check out the extenstion in your browser
```

a browser extension which gets the url and makes it into a qrcode so you can continue browsing on your mobile without signing in to firefox or chrome

`why does the bundle.js have so many lines?

` because you cannot import dependancies in frontend javascript, so I had to use browserify to import the package for me

` dependancies:
npm i qrcode
npm i -g browserify

the command for browsreify :
browserify popup.js -d --s bundle > bundle.js

to make a bundle.js from popup.js file
