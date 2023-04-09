const car = {
    type: 'BMW',
    color:'bleu',
    doors: 5,
    airConditioner: true,
};

const doors1 = car.doors;
const doors2 = car['doors'];
car.type = 'Mercedes';
car.typedoors = 'chrom';

console.log(doors1);
console.log(doors2);
console.log(car.type);
console.log(car)


let user = {
    firstName: 'John',
    lastName: 'DOE'
  }
  
  user.userName = 'jdoe'
  
  // Display : { firstName: 'John', lastName: 'DOE', userName: 'jdoe' }
  console.log(user)


