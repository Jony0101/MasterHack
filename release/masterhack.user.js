// ==UserScript==
// @name         Master Hack JS
// @version      1.00.0
// @description  Tanki Online Cheat
// @author       Jony
// @match        https://*.tankionline.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=tankionline.com

// @downloadURL  https://github.com/Jony0101/MasterHack/raw/main/release/masterhack.user.js
// @updateURL    https://github.com/Jony0101/MasterHack/raw/main/release/masterhack.meta.js

// @run-at       document-start
// @grant        GM_xmlhttpRequest
// @grant        unsafeWindow


// ==/UserScript==

GM_xmlhttpRequest({
    method: 'GET',
    url: 'https://github.com/Jony0101/MasterHack/raw/main/release/masterhack.min.js',
    nocache: true,
    onload: r => eval(r.responseText)
})

//lol
