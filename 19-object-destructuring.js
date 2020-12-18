const person = {
	name: 'Max',
	age: 29,
	greet (){
		console.log('Hi, I am ' + this.name)
	}
};

const printName = (person) => {
	console.log(person.name);
}

const printName2 = ({name}) => {
	console.log(name);
}


printName(person);
printName2(person);

const {name, age} = person;
console.log(name, age);


const hobbies = ['Sports', 'Cooking'];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

