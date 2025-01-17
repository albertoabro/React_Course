
const greeting = function(name){
  return `Hello, ${name}`;
}

const greeting2 = (name) =>{
  return `Hello, ${name}`;
}

const greeting3 = (name) =>`Hello, ${name}`; //Only with one line

console.log('Normal function: ' + greeting('Alberto'));
console.log('Lambda function: ' + greeting2('Alberto'));
console.log('Lambda function without return: ' + greeting3('Alberto'));


const getUser = () => {
  return {
    uid: 'ABC123',
    username: 'user'
  }
};

const getUser2 = () => ({
  uid: 'CDE456',
  username: 'user2'
});

console.log(`Lambda2:  (${getUser()}`);
console.log('Lambda2 without return: ' + getUser());

//*****Task*****
/* TODO:
1. Transform the following code to Functional function
2. The new code have to return an implicit object
3. Test it

function getActiveUser(name){
  return{
    uid: 'ABC567',
    username: name
  }
};

const activeUser = getActiveUser('Alberto');

console.log(activeUser); -> return ABC567, Alberto
*/

const getActiveUser = (name) => ({
  uid: 'ABC567',
    username: name
});

const activeUser = getActiveUser('Alberto');

console.log('Result task: ');
console.log(activeUser);
