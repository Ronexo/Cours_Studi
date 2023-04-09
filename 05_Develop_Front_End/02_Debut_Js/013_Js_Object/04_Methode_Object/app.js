/*let user = {
    firstName: 'John',
    lastName: 'DOE',
    age: 36,
    email: 'j.doe@email.com',
    phoneNumbers: ['0660504030', '0123456789'],
  }

  console.log(Object.keys(user)); 
// ['firstName', 'lastName', 'age', 'email', 'phoneNumbers']
console.log(Object.values(user)); 
// ['John', 'DOE', 36, 'j.doe@email.com', ['0660504030', '0123456789']]
console.log(Object.entries(user));
/*[ [ 'firstName', 'John' ],
  [ 'lastName', 'DOE' ],
  [ 'age', 36 ],
  [ 'email', 'j.doe@email.com' ],
  [ 'phoneNumbers', [ '0660504030', '0123456789' ] ],
  [ 'fullName', [Function] ] ]*/

  /*let user = {
    firstName: 'John',
    lastName: 'DOE',
    age: 36,
    email: 'j.doe@email.com',
    phoneNumbers: ['0660504030', '0123456789'],
  }
  
  let propertyLastNameExist = user.hasOwnProperty('lastName')
  if (propertyLastNameExist) {
    console.log(user['lastName']) // DOE
  }*/

  //exercice

  const car = {
    type: 'BMW',
    color: 'blue',
    doors: 5,
    airConditioner: true
  }
  
  const properties = Object.keys(car);
  const values = Object.values(car);
  console.log(properties); //['type', 'color', 'doors', 'airConditioner'];
  console.log(values); //['BMW', 'blue', 5, true];