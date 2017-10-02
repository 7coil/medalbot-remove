// ==UserScript==
// @name         discordbots.org MedalBot Remover
// @namespace    https://moustacheminer.com/
// @version      0.2
// @description  Removes the MedalBot from the Certified bots list.
// @author       Moustacheminer Server Services
// @match        https://discordbots.org/
// @grant        none
// ==/UserScript==

[... document.getElementsByClassName('bot-card')]
    .filter(thing => thing.innerHTML.includes('/bot/307998818547531777'))
    .forEach(thing => thing.parentNode.removeChild(thing));
