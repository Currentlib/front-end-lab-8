var euro = Number(prompt("Input amount of EURO", "0"));
var usd = Number(prompt("Input amount of USD", "0"));
var nbuEuro = 33.4602;
var nbuUsd = 27.1196;
console.log(euro + " euros are equal " + (euro*nbuEuro).toFixed(0) + " UAH, " + usd + " dollars are equal " + (usd*nbuUsd).toFixed(0) + " UAH, one euro is equal " + (nbuEuro/nbuUsd).toFixed(3));
