var square = x => x * x;

console.log(square(700));

var user = {
    name : 'Saurabh',
    sayHi:()=>{
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`);
    },
    sayHiAlt () {
        console.log(arguments);
        console.log(`Hi. I am ${this.name}`);
    }
};

user.sayHiAlt(1, 2, 4);