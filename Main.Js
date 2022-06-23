// ==UserScript==
// @name         New Userscript
// @namespace    http://tampermonkey.net/
// @version      0.12
// @description  try to take over the world!
// @author       You
// @match        https://app.qbo.intuit.com/*
// @require      file://C:\Users\User\Documents\GitHub\QB_Delete\Main.Js
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==



//Github push and version controll works! YAYYYY

// function tries to find the sidebar menu for quickbooks online and remove unnecessary sidebar items
function removeElem() {
    'use strict';

    // Your code here...
    console.log("first step went ok")

    var parrent = document.getElementsByClassName('leftnav-list');
    console.log("Got Element");
    console.log(parrent);



    var child = document.getElementsByClassName('primaryNavItem cash_flow ');
    
    console.log(child.nodeType);
    

    console.log("removed");
};

document.addEventListener("DOMContentLoaded", removeElem());

//setTimeout(removeElem(),5000);


