# sentry-template

Sentry package is located in 

`/usr/local/lib/python2.7/site-packages/sentry`

With templates being in 

`/usr/local/lib/python2.7/site-packages/sentry/templates/sentry`

And static files like CSS and logos in 

`/usr/local/lib/python2.7/site-packages/sentry/static/sentry`

Minimal `package.json` to regenerate CSS from LESS:

```
{
  "dependencies": {
    "bootstrap": "^3.3.5",
    "compression-webpack-plugin": "^1.0.1",
    "css-loader": "^0.28.7",
    "extract-text-webpack-plugin": "^3.0.2",
    "file-loader": "^1.1.5",
    "less": "^2.7.3",
    "less-loader": "^4.0.5",
    "lodash-webpack-plugin": "^0.11.4",
    "platformicons": "^0.1.1",
    "style-loader": "^0.19.0",
    "webpack": "^3.8.1"
  }
}
```

And then 

`NODE_ENV=production webpack`
