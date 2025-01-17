//Destructuring
const person = {
name: 'Alberto',
age: '29',
key: '1234'
};

const {name, age, key} = person; // Extract attributes from object

console.log(name);
console.log(age);
console.log(key);

const returnPerson = (user) =>{console.log(user)}
returnPerson(person);

const returnPerson2 = ({name, age}) =>{console.log(name, age)}
console.log('Return with destructuring: ')
returnPerson2(person);

const returnPerson3 = ({name, age, range='Capitan'}) =>{console.log(name, age, range)}
console.log('Return with destructuring and new default attribute: ')
returnPerson3(person);

const returnPerson4 = ({name, age, key}) =>({
keyName: key,
age2: age  
});

const avenger = returnPerson4(person);
console.log('Return with destructuring2: ')
console.log(avenger);

const {keyName, age2} = returnPerson4(person);
console.log(keyName, age2);
