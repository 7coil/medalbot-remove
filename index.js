// ==UserScript==
// @name         discordbots.org AdBlock
// @namespace    https://moustacheminer.com/
// @version      0.4
// @description  Removes the Partnered Bots from the Certified bots list.
// @author       Moustacheminer Server Services
// @match        https://discordbots.org/
// @grant        none
// ==/UserScript==

window.addEventListener('load', () => {
	[... document.getElementsByClassName('partnered')]
		.forEach(bot => bot.parentNode.removeChild(bot));
});
