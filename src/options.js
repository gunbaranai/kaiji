//Options
export default {
	money: 100000,
	txtSpin: 'SPIN',
	txtAutoSpin: 'AUTO',
	txtAuto : 5,
	moneyWin: 0,
	txtMaxBet: 'MAXBET',
	coin: 10,
	txtCoin: 'COIN',
	line: 1,
	txtLine: 'LINES',
	txtInfo: 'INFO',
	win: 0,
	lineArray: [],
	result: [],
	winningLines : [],
	i: 0,
	hsv: [],
	//values symbols0 ==> symbols9
	payvalues: [
		[100, 150, 200],
		[50, 100, 150],
		[25, 50, 100],
		[25, 50, 100],
		[15, 25, 50],
		[10, 20, 35],
		[10, 15, 25],
		[10, 15, 20],
		[5, 10, 20],
		[3, 8, 18]
	],
	//max payline 20
	payLines: [
		[[0, 1], [1, 1], [2, 1]], //line 1
	],
	checkClick: false,
	symbolHeight: 150,
	duration: 100,
	repeat: [5, 10, 15, 20, 25]
};
