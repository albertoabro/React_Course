
  const  name='Alberto';
  const last_name='Abad';

  const completedName = `
  ${name}
  ${last_name}`; //Execute values of JavaScript parameters in a string `${parameter}`

  console.log(completedName);

  function getGreeting(name){
    return 'Hello ' + name;
  }
  console.log(`This is a text: ${getGreeting(name)}`);
