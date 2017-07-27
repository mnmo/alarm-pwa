// @flow
const SW_URL = `./sw.js`;

const onLoad = () => {
  console.assert(
    navigator.serviceWorker !== undefined,
    `Browser don't support service worker`
  );
  if (navigator.serviceWorker === undefined) {
    return false;
  }
  navigator.serviceWorker.register(SW_URL).then(
    registration => {
      // Registration was successful
      console.log(
        "ServiceWorker registration successful with scope: ",
        registration.scope
      );
    },
    err => {
      // registration failed :(
      console.log("ServiceWorker registration failed: ", err);
    }
  );
};
window.addEventListener("load", onLoad);
