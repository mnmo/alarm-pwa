(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
//      
var SW_URL = "./sw.js";

var onLoad = function () {
  console.assert(navigator.serviceWorker !== undefined, "Browser don't support service worker");
  if (navigator.serviceWorker === undefined) {
    return false;
  }
  navigator.serviceWorker.register(SW_URL).then(function (registration) {
    // Registration was successful
    console.log("ServiceWorker registration successful with scope: ", registration.scope);
  }, function (err) {
    // registration failed :(
    console.log("ServiceWorker registration failed: ", err);
  });
};
window.addEventListener("load", onLoad);
},{}]},{},[1]);
