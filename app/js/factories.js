'use strict';

choisrApp.factory('itemFactory', function () {
	var factory = {};

	var items = [
		{ id: '1', title: 'This is a title - 1', userid: '1', username: 'Sebastian Schäffer' },
		{ id: '2', title: 'This is a title - 2', userid: '2', username: 'Steffen Irrgang' },
		{ id: '3', title: 'This is a title - 3', userid: '3', username: 'Andre Zayarni' },
		{ id: '4', title: 'This is a title - 4', userid: '4', username: 'Julia Brehm' },
		{ id: '5', title: 'This is a title - 5', userid: '5', username: 'Whitney Buchanan' },
		{ id: '6', title: 'This is a title - 6', userid: '6', username: 'Paul Aquire-Livingston' },
		{ id: '7', title: 'This is a title - 7', userid: '7', username: 'Fahima Gibrel' },
		{ id: '8', title: 'This is a title - 8', userid: '8', username: 'Guillermo Spanishguy' },
		{ id: '9', title: 'This is a title - 9', userid: '9', username: 'Rayna Racheva' },
		{ id: '10', title: 'This is a title - 10', userid: '10', username: 'Francesca Pillegi' }
	];

	factory.getItems = fuction () {
		return items;
	}
})