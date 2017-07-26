// @flow
const BASE_URL = "https://oodsykqmze.localtunnel.me/";
// const BASE_URL = '.';
const SW_URL = `${BASE_URL}sw.js`;

console.log({ BASE_URL });
console.log({ SW_URL });

window.addEventListener("load", function() {
  const hasServiceWorker = navigator.serviceWorker === undefined;
  console.assert(hasServiceWorker);
  if (navigator.serviceWorker === undefined) {
    return false;
  }
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
