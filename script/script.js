"use strict";

const shoppingMallData = {
	shops: [
		{
			width: 10,
			length: 5
		},
		{
			width: 12,
			length: 7
		},
		{
			width: 20,
			length: 5
		},
		{
			width: 8,
			length: 10
		}
	],
	height: 5,
	moneyPer1m3: 30,
	budget: 50000
}

function isBudgetEnough(data) {
	let calcShop = [];
	let calcShops = 0;
	let square
	for (let i = 0; i < data.shops.length; i++) {
		let shop = Object.values(data.shops[i]);
		calcShop[i] = shop[0] * shop[1];
		calcShops += calcShop[i];
	}
	square = data.height * calcShops * data.moneyPer1m3;
	console.log(square)

	if (square > data.budget) return console.log("Бюджета недостаточно");
	else return console.log('Бюджета достаточно');
}
isBudgetEnough(shoppingMallData)



// let shop = Object.values(shoppingMallData.shops[3]);
// 		let calcShops = shop[0]*shop[1];
// 		console.log(calcShops)