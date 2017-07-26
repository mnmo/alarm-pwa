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

But you could use your own certificates with budo or a different service such as  ngrok too.

[budo]: https://github.com/mattdesl/budo
[localtunnel]: https://localtunnel.me

