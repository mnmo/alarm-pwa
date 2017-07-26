// @flow
const SW_URL = `./sw.js`;

window.addEventListener("load", function() {
  console.assert(
    navigator.serviceWorker !== undefined,
    `Browser don't support service worker`
  );
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
