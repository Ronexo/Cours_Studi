/*let username = 'john';
console.log(username.toUpperCase());*/


/*console.log(Math.round(8.6));*/  /*ceil, floor*/

/*let username = 'john';

console.log(Number.isInteger(username));*/ //pour sassuré que le nombre est entier.


function transformationTexte(word) {
    const FIRSTLETTER = word.slice(0, 1).toUpperCase();
    const LASTLETTER = word.slice(1).toLowerCase();
    return `${FIRSTLETTER}${LASTLETTER}`;
}

const NEWWORD = transformationTexte('hiStOire');
console.log(NEWWORD);
