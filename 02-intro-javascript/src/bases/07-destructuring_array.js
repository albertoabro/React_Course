//Array's Destructuring 

const characters = ['Goku', 'Vegeta', 'Trunks'];

console.log(characters);
const [,, character1] = characters; //Extract the last character (1 comma it's 1 position of array)
console.log(character1);

const returnArray = () => ['ABC', 123];
const [letters, numbers] = returnArray();
console.log(letters, numbers);

//*****Task*****
//1. First value of arr will be named name
//2. Second value will be named setName

const useState = ( value ) => [value, () => {console.log('Hello World')}];
const [name, setName] = useState('Goku');
console.log(name); 
setName();
