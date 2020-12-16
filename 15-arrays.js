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

const hobbies = ['Sports', 'Cooking'];
for(let hobby of hobbies){
	console.log(hobby);
}

hobbies.map(x => console.log(x + '2'));
console.log(hobbies.map(hobby => 'hobby: ' + hobby));
console.log(hobbies);

hobbies.push('Programming');
console.log(hobbies);

const copiedArray = hobbies.slice();
console.log(copiedArray);

// no lo mismo
const copiedArray2 = [hobbies];
console.log(copiedArray2);

// copia
const copiedArray3 = [...hobbies];
console.log(copiedArray3);

const copiedPerson = {...person};
person.max = 30;
console.log(copiedPerson);

const toArray =  (arg1, arg2, arg3) => {
	return [arg1, arg2, arg3];
};


const toArray2 =  (...args) => {
	return args;
};

console.log(toArray(1,2,3,4));
console.log(toArray2(1,2,3,4));