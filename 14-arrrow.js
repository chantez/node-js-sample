
// crear object
const person = {
	name: 'Max',
	age: 29,
	greet: () => {
		console.log('Hi, I am ' + this.name)
	},
	greet2 (){
		console.log('Hi, I am ' + this.name)
	}
};

console.log(person);

person.greet();
person.greet2();