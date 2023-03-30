/*function sayHello(username) 
{
    console.log(`${getHello()} ${username}`);
}

function getHello()
{
    if (Math.random() > 0.5) {
        return 'bienvenue';
    } else {
        return 'bonjour';
    }
}

sayHello('john');
sayHello('laure');
sayHello('robert');
sayHello('alphonse');
sayHello('solene');
sayHello('Sophie');*/

/*function average(note1, note2, note3)
{
    return (note1 + note2 + note3) /3;
}

let avg = average(12, 15, 16);
console.log(Math.round(avg*10) / 10);

let avg2 = average(8, 10, 12);
console.log(avg2);*/

function cube(height, width, depth)
{
    return (height*width*depth);
}

const height = prompt('Hauteur du parallélépipèdes ');
const width = prompt('Largeur du parallélépipèdes ');
const depth = prompt('Profondeur du parallélépipèdes ');

const volume = cube(height, width, depth);

alert(volume);

/*function cube(height, width, depth)
{
    return (height*width*depth);
}

let parallélépipèdes = cube(15, 14, 2);
console.log(parallélépipèdes);*/