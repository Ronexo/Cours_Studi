"use strict";

function askUsername() {
  return prompt('Quel est votre nom d\'utilisateur ?');
}
function askMathOperation() {
  return prompt('Combien font 2 + 2');
}
function success() {
  console.log('Vous pouvez accéder à l\'application');
}
function error() {
  console.log('Restez où vous êtes');
}
function checkUsername() {
  return new Promise(function (resolve, reject) {
    var username = askUsername();
    if ('admin' === username) {
      resolve();
    } else {
      reject();
    }
  });
}
function checkIfIsBot() {
  return new Promise(function (resolve, reject) {
    var result = askMathOperation();
    if (4 === parseInt(result)) {
      resolve();
    } else {
      reject();
    }
  });
}
Promise.all([checkUsername(), checkIfIsBot()]).then(success, error);
