// ==UserScript==
// @name         discordbots.org MedalBot Remover
// @namespace    https://moustacheminer.com/
// @version      0.1
// @description  Removes the MedalBot from the Certified bots list.
// @author       Moustacheminer Server Services
// @match        https://discordbots.org/
// @grant        none
// ==/UserScript==

[... document.getElementsByClassName('card')].filter(thing => thing.innerHTML.includes('MedalBot')).forEach(thing => thing.parentNode.removeChild(thing));
