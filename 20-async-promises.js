// async
const fetchData = callback => {
	setTimeout(() => {
		callback('Done!', 'sfs')
		callback('Done!', 'sfs')
		callback('Done!', 'sfs')
	}, 1500);
}

setTimeout(() => {
	console.log('Timer is done!');
	fetchData(text => {
		console.log(text);
	})
}, 2000);

console.log('hi');


// promise
// es sincrono
const fetchData2 = () => {

	const promise = new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve('Done22!', 'sfs');
			resolve('Done3!', 'sfs');
			resolve('Done4!', 'sfs');
		}, 1500);
	});
	return promise;
	
};

setTimeout(() => {
	console.log('Timer2 is done!');
	fetchData2()
		.then(text => {
			console.log(text);
			return fetchData2();
		})
		.then(text2 => {
			console.log(text2);
		})
		.then(text3 => {
			console.log(text3);
		})

	
}, 2000);



const name = "Max";
const age = 29;
console.log(`My name is ${name} and I am ${age} years old.`);