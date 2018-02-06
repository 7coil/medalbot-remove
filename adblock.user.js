// ==UserScript==
// @name         discordbots.org AdBlock
// @namespace    https://moustacheminer.com/
// @version      1.0.1
// @description  Removes the Partnered Bots from the Certified bots list.
// @author       Moustacheminer Server Services
// @match        https://discordbots.org/
// @grant        none
// ==/UserScript==

/* eslint-env browser */
/* globals request */

const count = 1000;
const apiUrl = 'https://discordbots.org/api/bots/?limit=1&offset=';

const commaDelimit = (number) => {
	const x = `${number}`;
	const regex = new RegExp(`\\B(?=(\\d{3})+${~x.indexOf('.') ? '\\.' : '$'})`, 'g'); // eslint-disable-line no-bitwise
	return x.replace(regex, ',');
};

const replaceBot = (bot) => {
	request({
		url: apiUrl + Math.floor(count * Math.random()),
		method: 'GET'
	}, (err, result) => {
		const [res] = result.results || [null];
		if (err || !res) {
			bot.parentNode.removeChild(bot);
		} else if ([...document.getElementsByClassName('bot-card')].some(thing => thing.innerHTML.includes(res.id))) {
			replaceBot(bot);
		} else {
			bot.className = 'content';
			bot.getElementsByClassName('bot-img')[0].firstChild.src = `https://cdn.discordapp.com/avatars/${res.id}/${res.avatar}.webp?size=512`;
			bot.getElementsByClassName('bot-img')[0].firstChild.alt = `${res.username}'s Avatar`;
			bot.getElementsByClassName('bot-img')[0].firstChild.setAttribute('onclick', `window.location.href = '/bot/${res.id}'`);
			bot.getElementsByClassName('stats')[0].firstChild.setAttribute('onclick', `upvote('${res.id}', this)`);
			bot.getElementsByClassName('stats')[0].firstChild.lastChild.innerHTML = commaDelimit(res.points);
			bot.getElementsByClassName('servers btn btn-orange btn-1x')[0].innerHTML = `${commaDelimit(res.server_count)} Servers`;
			bot.getElementsByClassName('info')[0].firstChild.href = `/bot/${res.id}`;
			bot.getElementsByClassName('bot-name')[0].innerHTML = res.username;
			bot.getElementsByClassName('bot-description')[0].innerHTML = res.shortdesc;
			bot.getElementsByClassName('lib')[0].innerHTML = res.lib;
			bot.getElementsByClassName('bot-btns')[0].firstChild.href = `/bot/${res.id}`;
			bot.getElementsByClassName('bot-btns')[0].lastChild.href = res.invite;
		}
	});
};

window.addEventListener('load', () => {
	[...document.getElementsByClassName('partnered')]
		.forEach(bot => replaceBot(bot));
	const footer = [...[...document.getElementsByTagName('footer')][0].getElementsByTagName('p')][0];
	footer.parentNode.removeChild(footer);
});
