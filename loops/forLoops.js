console.log("Print all numbers between -10 and 19");
for (let i = -10; i < 20; i++) {
	console.log(i);
}
console.log("Print all even numbers between 10 and 40");
for (var j = 10; j <= 40 ; j+=2) {
	console.log(j);
}
console.log("Print all odd numbers between 300 and 333");
for (var k = 301; k <= 333; k+=2) {
	console.log(k);
}
console.log("Print all numbers divisible by 5 and 3 between 5 and 50");
for (var l = 5; l <= 50; l++) {
	if(l % 5 === 0 && l % 3 === 0){
		console.log(l);
	}
}

