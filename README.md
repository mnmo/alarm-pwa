# alarm-pwa
 Webapp experiment, an attempt to wake up a locked Android phone with a notification.

##  Contributing

### 0. Install development dependencies

```
npm install
```

### 1. Development Webserver
This project uses [budo][budo], to start it run:

```
npm start
```

### 2. HTTPS
Some of the features in progressive web-apps requires SSL, to make things simple, we use [localtunnnel][localtunnel].

```
npm i -g localtunnel
lt --port 9966
```

Remember to open port 36657 on your router, to keep localtunnel active and to keep your subdomain.


If you are testing locally https is not a requirement for service works and using ```http://localhost:9966``` should be fine.


[budo]: https://github.com/mattdesl/budo
[localtunnel]: https://localtunnel.me

