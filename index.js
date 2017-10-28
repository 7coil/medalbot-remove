// ==UserScript==
// @name         discordbots.org AdBlock
// @namespace    https://moustacheminer.com/
// @version      0.3
// @description  Removes the Partnered Bots from the Certified bots list.
// @author       Moustacheminer Server Services
// @match        https://discordbots.org/
// @grant        none
// ==/UserScript==

const partners = [
	'307998818547531777',
	'216816090712506378'
];

[... document.getElementsByClassName('bot-card')]
    .filter(bot => partners.some((id) => bot.innerHTML.includes(id)))
    .forEach(bot => bot.parentNode.removeChild(bot));
