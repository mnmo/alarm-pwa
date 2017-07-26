// @flow
const BASE_URL: string = "https://oodsykqmze.localtunnel.me/";
// const BASE_URL = '.';
const SW_URL: string = `${BASE_URL}sw.js`;

console.log({ BASE_URL });
console.log({ SW_URL });

if ("serviceWorker" in navigator) {
  window.addEventListener("load", function() {
    navigator.serviceWorker.register(SW_URL).then(
      function(registration) {
        // Registration was successful
        console.log(
          "ServiceWorker registration successful with scope: ",
          registration.scope
        );
      },
      function(err) {
        // registration failed :(
        console.log("ServiceWorker registration failed: ", err);
      }
    );
  });
}
