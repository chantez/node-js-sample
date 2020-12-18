
var name = 'Max';
var age = 29;
var hasHobbies = true;

// preferir let, 
// no debería cambiar el valor

// preferir const si el valor nunca cambiara
let name2 = 'Max';
let age2 = 29;
let hasHobbies2 = true;
const name3 = 'Max';

age2 = 30;
age2 = 31;
age2 = 32;

console.log(name);
console.log(age2);
console.log(hasHobbies);
console.log(hasHobbies);

function summarizeUser(userName, userAge, userHasHobby){
	return('Name is ' + userName);
};

console.log(summarizeUser(name, age, hasHobbies));

// annonymous function
const summarizeUser2 = function (userName, userAge, userHasHobby){
	return('Name2 is ' + userName);
};
console.log(summarizeUser2(name2, age, hasHobbies));



const summarizeUser3 = (userName, userAge, userHasHobby) => {
	return('Name3 is ' + userName);
};
console.log(summarizeUser3(name2, age, hasHobbies));

const add = (a, b) => {
	return a + b;
}
console.log(add(1,4));


const add2 = (a, b) =>  a + b;

console.log(add(1,4));
console.log(add2(1,4));

const addOne = a => a + 1;
console.log(addOne(1));
console.log(addOne(1));
console.log(addOne(1));

// paa errores
const addRandom = () => 1 +2;
console.log(addRandom());
