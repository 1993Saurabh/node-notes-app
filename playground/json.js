// var obj = {
//     name : 'Saurabh'
// };

// var stringObj = JSON.stringify(obj);
// console.log(typeof stringObj);
// console.log(stringObj);

var personString = '{"name":"Saurabh", "age":24}';
var person = JSON.parse(personString);
console.log(typeof person.name);