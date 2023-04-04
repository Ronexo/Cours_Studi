const sum = (num1, num2) => num1 + num2;
    
console.log(sum(40,2)) // retourne dans la console 42 



const stringLength = str => {
    let length = str.length
    console.log(`the length of "${str}" is:`, length)
    return str.length
}

stringLength("willynilly")


const array1 = ['a', 'b', 'c'];

array1.forEach(element => console.log(element));
    
// expected output: "a"
// expected output: "b"
// expected output: "c"

function increment(counter) {
    if (counter === 10){
      return counter;
    } else {
      counter++;
      increment(counter)
      return increment(counter)
    }
  }
  console.log(increment(0));

  (() => {
    const hello = 'Hello world';
    console.log(hello);
  })()


